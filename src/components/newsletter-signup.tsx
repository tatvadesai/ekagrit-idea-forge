
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // For now, we'll just simulate the signup
    // You can integrate with ConvertKit, Mailchimp, or other services here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Thanks for subscribing!",
        description: "You'll hear from us with interesting updates.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-muted/20 p-8 rounded-lg border border-border/40"
    >
      <div className="text-center space-y-4 mb-6">
        <div className="flex justify-center">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-space text-xl font-semibold text-foreground">
          stay connected
        </h3>
        <p className="font-inter text-muted-foreground">
          occasional updates about interesting projects and connections. no spam, unsubscribe anytime.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="font-inter"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          {isSubmitting ? "joining..." : "join the list"}
        </Button>
      </form>
    </motion.div>
  );
};

export default NewsletterSignup;
