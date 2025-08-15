import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock blog post data - in a real app this would come from a CMS or API
const blogPosts = {
  "welcome-to-magpies-journal": {
    title: "Welcome to The Magpies Journal",
    content: `
      <p>Welcome to The Magpies Journal, a space where curiosity meets storytelling, and where I invite you to join me on a weekly journey of discovery.</p>
      
      <p>Like the magpie, I'm naturally drawn to interesting things – a beautiful turn of phrase, an unexpected connection between ideas, a moment of wonder that catches the light just right. This journal is my way of collecting these treasures and sharing them with you.</p>
      
      <h2>What You Can Expect</h2>
      <p>Every week, I'll be sharing thoughts, observations, and stories that have captured my attention. These might be:</p>
      
      <ul>
        <li>Reflections on books that have moved me</li>
        <li>Insights from conversations that changed my perspective</li>
        <li>Observations about the world around us</li>
        <li>Personal essays about life, creativity, and human nature</li>
      </ul>
      
      <p>I believe in the power of shared stories and the magic that happens when we connect through words. Thank you for being here, for reading, and for being part of this journey.</p>
      
      <blockquote>
        "The best stories are the ones that help us understand ourselves and each other a little better."
      </blockquote>
      
      <p>If you enjoy what you read here, consider supporting this work with a coffee. It means the world to me and helps keep the words flowing.</p>
    `,
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Welcome"
  },
  "power-of-weekly-reflection": {
    title: "The Power of Weekly Reflection",
    content: `
      <p>There's something magical about setting aside time each week to pause, reflect, and make sense of the experiences we've gathered. In our rush through daily life, these moments of contemplation often get pushed aside, yet they're where the real learning happens.</p>
      
      <h2>Creating Space for Thought</h2>
      <p>Weekly reflection isn't about forcing profound insights or dramatic revelations. It's about creating a gentle space where thoughts can settle and patterns can emerge. Like sediment in a stream, our experiences need time to settle before we can see clearly through the water.</p>
      
      <p>I've found that the simple act of writing about my week – what surprised me, what challenged me, what delighted me – reveals connections I never noticed while living through the moments themselves.</p>
      
      <h2>The Compound Effect of Small Insights</h2>
      <p>Each week's reflection might seem small on its own, but together they create a map of growth and understanding. Looking back through months of weekly thoughts, I can trace the evolution of ideas, see how problems resolved themselves, and notice the threads that weave through everything.</p>
      
      <blockquote>
        "We don't learn from experience. We learn from reflecting on experience." - John Dewey
      </blockquote>
      
      <p>What patterns are emerging in your own life? What would you discover if you gave yourself the gift of weekly reflection?</p>
    `,
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Reflection"
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="blog-container py-12">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </header>
            
            <Card className="card-shadow p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </Card>
            
            <div className="text-center border-t border-border pt-8">
              <p className="text-muted-foreground mb-4">
                Enjoyed this post? Support The Magpies Journal with a coffee.
              </p>
              <Button variant="coffee" size="lg">
                <Coffee className="w-5 h-5" />
                Buy me a coffee
              </Button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;