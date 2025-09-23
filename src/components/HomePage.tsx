import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { UploadDialog } from "./UploadDialog";
import { VideoList } from "./VideoList";

interface Video {
  id: string;
  fileName: string;
  caption: string;
  status: 'pending' | 'uploading' | 'uploaded';
  progress: number;
}

export function HomePage() {
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);

  const handleVideoUploaded = (video: Video) => {
    setVideos(prev => {
      const existingIndex = prev.findIndex(v => v.id === video.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = video;
        return updated;
      }
      return [...prev, video];
    });
  };

  const handleDeleteVideo = (id: string) => {
    setVideos(prev => prev.filter(v => v.id !== id));
  };

  return (
    <div className="min-h-screen">
      <HeroSection onUploadClick={() => setUploadDialogOpen(true)} />
      
      <VideoList 
        videos={videos}
        onUpdateVideo={handleVideoUploaded}
        onDeleteVideo={handleDeleteVideo}
      />
      
      <UploadDialog
        open={uploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
        onVideoUploaded={handleVideoUploaded}
      />
    </div>
  );
}