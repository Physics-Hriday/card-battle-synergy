
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Twitter, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
      variant: "default",
    });
  };

  return (
    <GameLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300">
          Have questions or feedback? We'd love to hear from you. Get in touch with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="glass-panel">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white/5 border-white/10" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/5 border-white/10" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger id="subject" className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-game-background border-white/10">
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="feedback">Game Feedback</SelectItem>
                    <SelectItem value="bug">Report a Bug</SelectItem>
                    <SelectItem value="business">Business Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  className="bg-white/5 border-white/10 min-h-[150px]" 
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-game-primary hover:bg-game-primary/90">
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 text-game-primary" />
                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <p className="text-gray-300">support@pokiwar.com</p>
                  <p className="text-gray-400 text-sm">For support and general inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Twitter className="mr-3 text-game-primary" />
                <div>
                  <h3 className="font-bold">Twitter</h3>
                  <p className="text-gray-300">@hridaykadam</p>
                  <p className="text-gray-400 text-sm">Follow us for news and updates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="mr-3 text-game-primary" />
                <div>
                  <h3 className="font-bold">Community</h3>
                  <p className="text-gray-300">Join our Discord server</p>
                  <p className="text-gray-400 text-sm">Connect with other players</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel">
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            <p className="text-gray-300 mb-4">
              Before reaching out, check if your question has already been answered in our frequently asked questions section.
            </p>
            <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
              View FAQs
            </Button>
          </div>
          
          <div className="glass-panel">
            <h2 className="text-xl font-bold mb-4">Response Time</h2>
            <p className="text-gray-300">
              We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please use the technical support option in our contact form.
            </p>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default ContactPage;
