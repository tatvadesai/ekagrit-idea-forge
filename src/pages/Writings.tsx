
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

const Writings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="font-space text-4xl md:text-5xl font-bold text-foreground">
                writings
              </h1>
              <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
                thoughts on building, connecting, and creating meaningful projects. 
                perspectives from the intersection of business, creativity, and human potential.
              </p>
            </div>

            {/* Posts Grid */}
            <ScrollReveal>
              <div className="space-y-8">
                {posts.length > 0 ? (
                  posts.map((post, index) => (
                    <PostCard key={post.id} post={post} index={index} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="font-inter text-muted-foreground">
                      new thoughts coming soon...
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Writings;
