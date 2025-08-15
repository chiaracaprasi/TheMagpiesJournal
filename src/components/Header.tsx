import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="blog-container">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">The Magpies Journal</h1>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Button variant="coffee" size="sm" className="ml-4">
              <Coffee className="w-4 h-4" />
              Buy me a coffee
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;