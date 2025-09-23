import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react";

interface PrivacyPageProps {
  onGoHome: () => void;
}

export function PrivacyPage({ onGoHome }: PrivacyPageProps) {
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
              <Shield className="w-4 h-4 text-[#25F4EE]" />
              <span className="text-sm">Privacy First</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy and data security are our top priorities. Learn how we protect your information.
            </p>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-[#25F4EE]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="w-6 h-6 text-[#25F4EE]" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us when you create an account, upload videos, 
                or interact with our platform. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Account information (email, username, profile details)</li>
                <li>Video content and metadata you upload</li>
                <li>Usage data and analytics to improve our service</li>
                <li>Device information and IP addresses for security purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#FE2C55]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#FE2C55]" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Process and publish your video content to TikTok</li>
                <li>Provide customer support and respond to your requests</li>
                <li>Send you technical notices and security alerts</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#25F4EE]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-[#25F4EE]" />
                Data Security & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure cloud storage with regular backups</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Limited access controls for our team members</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#FE2C55]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#FE2C55]" />
                Your Rights & Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                You have full control over your personal information and can exercise the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and download your personal data</li>
                <li>Update or correct your account information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of non-essential communications</li>
                <li>Request data portability to another service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Questions About Privacy?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              <Button className="gradient-aqua-pink text-black glow-button">
                Contact Privacy Team
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