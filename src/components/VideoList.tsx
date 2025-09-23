import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { FileVideo, Clock, CheckCircle, Upload, Play, Trash2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface Video {
  id: string;
  fileName: string;
  caption: string;
  status: 'pending' | 'uploading' | 'uploaded';
  progress: number;
}

interface VideoListProps {
  videos: Video[];
  onUpdateVideo: (video: Video) => void;
  onDeleteVideo: (id: string) => void;
}

export function VideoList({ videos, onUpdateVideo, onDeleteVideo }: VideoListProps) {
  const [processingQueue, setProcessingQueue] = useState<string[]>([]);

  const pendingVideos = videos.filter(v => v.status === 'pending');
  const uploadingVideos = videos.filter(v => v.status === 'uploading');
  const uploadedVideos = videos.filter(v => v.status === 'uploaded');

  const processBatch = async () => {
    const pendingIds = pendingVideos.map(v => v.id);
    if (pendingIds.length === 0) return;

    setProcessingQueue(pendingIds);
    
    for (const id of pendingIds) {
      const video = videos.find(v => v.id === id);
      if (!video) continue;

      // Start upload
      const uploadingVideo = { ...video, status: 'uploading' as const, progress: 0 };
      onUpdateVideo(uploadingVideo);

      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += Math.random() * 15) {
        const progressValue = Math.min(progress, 100);
        onUpdateVideo({ ...uploadingVideo, progress: progressValue });
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Complete upload
      const completedVideo = { ...video, status: 'uploaded' as const, progress: 100 };
      onUpdateVideo(completedVideo);
      
      toast.success(`"${video.fileName}" uploaded successfully!`, {
        description: "Video is now live on TikTok",
      });

      // Small delay between uploads
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setProcessingQueue([]);
    toast.success("Batch upload completed!", {
      description: `${pendingIds.length} videos uploaded successfully`,
    });
  };

  const getStatusIcon = (status: Video['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'uploading':
        return <Upload className="w-4 h-4 text-[#25F4EE]" />;
      case 'uploaded':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getStatusBadge = (status: Video['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500">Pending</Badge>;
      case 'uploading':
        return <Badge variant="secondary" className="bg-[#25F4EE]/10 text-[#25F4EE]">Uploading</Badge>;
      case 'uploaded':
        return <Badge variant="secondary" className="bg-green-500/10 text-green-500">Uploaded</Badge>;
    }
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Video Manager</h2>
            <p className="text-muted-foreground">
              Manage your TikTok video uploads and track their status
            </p>
          </div>
          
          {pendingVideos.length > 0 && (
            <Button
              onClick={processBatch}
              disabled={processingQueue.length > 0}
              className="gradient-aqua-pink text-black glow-button"
            >
              {processingQueue.length > 0 ? 'Processing...' : `Upload ${pendingVideos.length} Videos`}
            </Button>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-yellow-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-yellow-500">{pendingVideos.length}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-[#25F4EE]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Uploading</p>
                  <p className="text-2xl font-bold text-[#25F4EE]">{uploadingVideos.length}</p>
                </div>
                <Upload className="w-8 h-8 text-[#25F4EE]" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Uploaded</p>
                  <p className="text-2xl font-bold text-green-500">{uploadedVideos.length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video List */}
        <div className="space-y-6">
          {videos.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <FileVideo className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No videos yet</h3>
                <p className="text-muted-foreground">Upload your first video to get started!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {videos.map((video) => (
                <Card key={video.id} className="transition-all duration-200 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#25F4EE]/20 to-[#FE2C55]/20 rounded-lg flex items-center justify-center">
                          <FileVideo className="w-8 h-8 text-[#25F4EE]" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {getStatusIcon(video.status)}
                            <h3 className="font-semibold truncate">{video.fileName}</h3>
                            {getStatusBadge(video.status)}
                          </div>
                          <p className="text-sm text-muted-foreground truncate mb-2">
                            {video.caption}
                          </p>
                          
                          {video.status === 'uploading' && (
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Uploading to TikTok...</span>
                                <span>{Math.round(video.progress)}%</span>
                              </div>
                              <Progress value={video.progress} className="h-1" />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {video.status === 'uploaded' && (
                          <Button variant="outline" size="sm">
                            <Play className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onDeleteVideo(video.id)}
                          disabled={video.status === 'uploading'}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}