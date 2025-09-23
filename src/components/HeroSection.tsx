import { Button } from "./ui/button";
import { Play, Upload, Video } from "lucide-react";

interface HeroSectionProps {
  onUploadClick: () => void;
}

export function HeroSection({ onUploadClick }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#25F4EE]/10 to-[#FE2C55]/10 border border-[#25F4EE]/20 mb-8">
          <Video className="w-4 h-4 text-[#25F4EE]" />
          <span className="text-sm">Next-Gen Video Management Platform</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Manage &{" "}
          <span className="gradient-text">Publish Videos</span>{" "}
          to TikTok
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Streamline your content creation workflow with our powerful video management system. 
          Upload, organize, and publish your videos to TikTok with just a few clicks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onUploadClick}
            size="lg"
            className="px-8 py-6 text-lg gradient-aqua-pink text-black hover:shadow-lg hover:shadow-[#25F4EE]/25 transition-all duration-300 glow-button"
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload Video to TikTok
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-[#25F4EE]/30 hover:border-[#25F4EE] hover:bg-[#25F4EE]/10 transition-all duration-300"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">10M+</div>
            <div className="text-muted-foreground">Videos Uploaded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500K+</div>
            <div className="text-muted-foreground">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}