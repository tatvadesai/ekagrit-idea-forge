
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/posts";

interface PostCardProps {
  post: BlogPost;
  index?: number;
}

const PostCard = ({ post, index = 0 }: PostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/writings/${post.id}`}>
        <Card className="border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="font-space text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="font-inter text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PostCard;
