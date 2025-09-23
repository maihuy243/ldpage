import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, FileText, Users, AlertTriangle, Scale } from "lucide-react";

interface TermsPageProps {
  onGoHome: () => void;
}

export function TermsPage({ onGoHome }: TermsPageProps) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={onGoHome}
            className="mb-6 hover:bg-[#25F4EE]/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#25F4EE]/10 to-[#FE2C55]/10 border border-[#25F4EE]/20 mb-6">
              <FileText className="w-4 h-4 text-[#25F4EE]" />
              <span className="text-sm">Legal Agreement</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our video management platform.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-[#25F4EE]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#25F4EE]" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using VideoManager, you accept and agree to be bound by the terms 
                and provisions of this agreement. These Terms of Service govern your use of our platform 
                and services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree to abide by the above, please do not use this service. We reserve 
                the right to modify these terms at any time, and such modifications will be effective 
                immediately upon posting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#FE2C55]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#FE2C55]" />
                Use of the Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You may use our service for lawful purposes only. You agree not to use the service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>In any way that violates applicable laws or regulations</li>
                <li>To upload content that infringes on intellectual property rights</li>
                <li>To transmit harmful, threatening, or offensive material</li>
                <li>To attempt to gain unauthorized access to our systems</li>
                <li>To interfere with or disrupt the service or servers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#25F4EE]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-[#25F4EE]" />
                Content Rights & Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to the content you upload to our platform. However, by uploading 
                content, you grant us a limited license to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Store and process your content to provide our services</li>
                <li>Publish your content to TikTok as requested by you</li>
                <li>Create backup copies for data protection purposes</li>
                <li>Analyze content for security and compliance purposes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You are solely responsible for ensuring you have the rights to upload and publish 
                any content through our platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#FE2C55]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FE2C55]" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our service is provided "as is" without any warranties, express or implied. 
                We shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Any direct, indirect, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Service interruptions or technical issues</li>
                <li>Actions or decisions made based on our service</li>
                <li>Third-party integrations or external services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#25F4EE]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#25F4EE]" />
                Account Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You may terminate your account at any time through your account settings. We may 
                terminate or suspend your account if you violate these terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, your right to use the service will cease immediately. We will 
                make reasonable efforts to provide you with access to your data for a limited time 
                following termination.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact our legal team 
                for clarification.
              </p>
              <Button className="gradient-aqua-pink text-black glow-button">
                Contact Legal Team
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Last updated: September 23, 2025
          </p>
        </div>
      </div>
    </div>
  );
}