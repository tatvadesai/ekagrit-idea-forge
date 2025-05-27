
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { posts } from "@/data/posts";

const WritingPost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-20">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-space text-2xl font-bold text-foreground mb-4">
              post not found
            </h1>
            <Link to="/writings">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                back to writings
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Simple markdown-to-HTML converter for basic formatting
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 class="font-space text-3xl font-bold text-foreground mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="font-space text-2xl font-semibold text-foreground mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="font-space text-xl font-medium text-foreground mb-3 mt-4">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/\n\n/g, '</p><p class="font-inter text-foreground leading-relaxed mb-4">')
      .replace(/^(?!<[h|l])/gm, '<p class="font-inter text-foreground leading-relaxed mb-4">')
      .replace(/<p class="font-inter text-foreground leading-relaxed mb-4">([^<]*<li)/g, '<ul class="list-disc list-inside mb-4 space-y-2"><li')
      .replace(/<\/li>([^<]*)<p class="font-inter text-foreground leading-relaxed mb-4">/g, '</li></ul><p class="font-inter text-foreground leading-relaxed mb-4">');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Back Button */}
            <Link to="/writings">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                back to writings
              </Button>
            </Link>

            {/* Post Header */}
            <div className="space-y-4">
              <h1 className="font-space text-3xl md:text-4xl font-bold text-foreground">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Content */}
            <div className="border-t border-border/40 pt-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />
            </div>

            {/* Back to Writings */}
            <div className="border-t border-border/40 pt-8">
              <Link to="/writings">
                <Button variant="outline" className="w-full md:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  back to all writings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WritingPost;
