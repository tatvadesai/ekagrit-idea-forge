
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8 max-w-md"
        >
          <div className="space-y-4">
            <h1 className="font-space text-6xl font-bold text-primary">404</h1>
            <h2 className="font-space text-2xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="font-inter text-muted-foreground">
              This page seems to have wandered off. Let's get you back to familiar territory.
            </p>
          </div>
          
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link to="/">Return Home</Link>
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
