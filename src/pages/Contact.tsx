
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you'd send this to your serverless function
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        subscribe: false,
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-2xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="font-space text-4xl md:text-5xl font-bold text-foreground">
                let's connect
              </h1>
              <p className="font-inter text-xl text-muted-foreground">
                building something interesting? creating something meaningful? i'd love to hear about it. 
                no pitch deck required—just bring your passion and vision.
              </p>
            </div>

            {/* Contact Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-inter font-medium">
                      name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="your name"
                      required
                      className="font-inter"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-inter font-medium">
                      email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="font-inter"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-inter font-medium">
                      message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="tell me about your project, vision, or what you're building. whether it's a startup, art, content, or any creative endeavor—i want to hear about it..."
                      rows={6}
                      required
                      className="font-inter resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="subscribe"
                      checked={formData.subscribe}
                      onCheckedChange={(checked) =>
                        setFormData(prev => ({ ...prev, subscribe: checked as boolean }))
                      }
                    />
                    <Label
                      htmlFor="subscribe"
                      className="font-inter text-sm text-muted-foreground"
                    >
                      subscribe for occasional updates (no spam, unsubscribe anytime)
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                >
                  {isSubmitting ? "sending..." : "start the conversation"}
                </Button>
              </form>
            </ScrollReveal>

            {/* Additional Info */}
            <ScrollReveal delay={0.1}>
              <div className="text-center space-y-4 pt-8 border-t border-border/40">
                <h3 className="font-space text-lg font-medium text-foreground">
                  what happens next?
                </h3>
                <p className="font-inter text-muted-foreground">
                  i'll get back to you within 24 hours. if there's mutual interest, we can hop on a call 
                  or grab coffee (if you're in india) to explore how we can help each other grow.
                </p>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
