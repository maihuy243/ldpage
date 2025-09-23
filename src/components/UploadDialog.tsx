import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { Label } from "./ui/label";
import { Upload, FileVideo, X } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface Video {
  id: string;
  fileName: string;
  caption: string;
  status: 'pending' | 'uploading' | 'uploaded';
  progress: number;
}

interface UploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVideoUploaded: (video: Video) => void;
}

export function UploadDialog({ open, onOpenChange, onVideoUploaded }: UploadDialogProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const simulateUpload = async (): Promise<void> => {
    return new Promise((resolve) => {
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            resolve();
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 150);
    });
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);

    const video: Video = {
      id: Date.now().toString(),
      fileName: selectedFile.name,
      caption: caption || "No caption",
      status: 'uploading',
      progress: 0
    };

    onVideoUploaded(video);

    try {
      await simulateUpload();
      
      const uploadedVideo: Video = {
        ...video,
        status: 'uploaded',
        progress: 100
      };
      
      onVideoUploaded(uploadedVideo);
      
      toast.success("Video uploaded successfully via TikTok API (fake demo)", {
        description: `"${selectedFile.name}" is now live on TikTok!`,
        duration: 4000,
      });

      // Reset form
      setSelectedFile(null);
      setCaption("");
      setUploadProgress(0);
      onOpenChange(false);
    } catch (error) {
      toast.error("Upload failed", {
        description: "Please try again later.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setCaption("");
    setUploadProgress(0);
    setIsUploading(false);
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      onOpenChange(newOpen);
      if (!newOpen) resetForm();
    }}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-[#25F4EE]" />
            Upload Video to TikTok
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* File Selection */}
          <div className="space-y-2">
            <Label htmlFor="video-file">Select Video File</Label>
            <div className="relative">
              <Input
                id="video-file"
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                disabled={isUploading}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#25F4EE] file:text-black hover:file:bg-[#25F4EE]/80"
              />
            </div>
            {selectedFile && (
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <FileVideo className="w-4 h-4 text-[#25F4EE]" />
                <span className="text-sm">{selectedFile.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFile(null)}
                  disabled={isUploading}
                  className="ml-auto h-6 w-6 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="space-y-2">
            <Label htmlFor="caption">Caption</Label>
            <Textarea
              id="caption"
              placeholder="Write an engaging caption for your TikTok video..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              disabled={isUploading}
              className="min-h-[100px] resize-none"
            />
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading to TikTok...</span>
                <span>{Math.round(uploadProgress)}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="gradient-aqua-pink text-black hover:shadow-lg hover:shadow-[#25F4EE]/25 transition-all duration-300"
            >
              {isUploading ? "Publishing..." : "Publish to TikTok"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}