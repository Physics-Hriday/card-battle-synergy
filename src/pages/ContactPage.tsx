
import React, { useState } from "react";
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
import { Mail, MessagesSquare, Send, MessageSquare, Linkedin, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would send this data to a server
    console.log("Form submitted with:", formData);
    
    // Show success toast
    toast.success("Message sent successfully!", {
      description: "Thank you for contacting us. We'll get back to you soon!"
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <GameLayout>
      <div className="mb-8 glass-panel">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-300">
              Have questions or feedback about Poki War? We'd love to hear from you! 
              Get in touch with our team using the form below.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-wrap gap-4 justify-center md:justify-end">
            <a href="mailto:support@pokiwar.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              <Mail size={16} />
              <span>Email Us</span>
            </a>
            <a href="https://discord.gg/pokiwar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              <MessagesSquare size={16} />
              <span>Join Discord</span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="glass-panel">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Send className="mr-2 text-game-primary" size={20} />
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white/5 border-white/10" 
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger id="subject" className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/95 border-white/10">
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
                  value={formData.message}
                  onChange={handleChange}
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
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MessageSquare className="mr-2 text-game-primary" size={20} />
              Contact Information
            </h2>
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
                <Linkedin className="mr-3 text-game-primary" />
                <div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/hridaykadam/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-game-primary flex items-center"
                  >
                    Hriday Kadam
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  <p className="text-gray-400 text-sm">Connect with the developer</p>
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
            <Link to="/faq">
              <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                View FAQs
              </Button>
            </Link>
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

// Helper function for Link component to avoid duplicating imports
const Link = ({ to, children, ...rest }: { to: string; children: React.ReactNode; [x: string]: any }) => {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
};

export default ContactPage;
