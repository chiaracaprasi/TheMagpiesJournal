import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const BlogPost = ({ title, excerpt, date, readTime, category, slug, featured = false }: BlogPostProps) => {
  return (
    <Card className={`card-shadow overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${featured ? 'border-primary/20' : ''}`}>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          {featured && (
            <Badge variant="default" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
        
        <Link to={`/post/${slug}`}>
          <h3 className={`font-bold text-foreground hover:text-primary transition-colors mb-3 ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readTime}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;