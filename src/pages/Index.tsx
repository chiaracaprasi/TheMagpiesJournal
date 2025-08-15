import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";

// Mock blog posts data - in a real app this would come from a CMS or API
const blogPosts = [
  {
    title: "Welcome to The Magpies Journal",
    excerpt: "Like the magpie, I'm naturally drawn to interesting things – a beautiful turn of phrase, an unexpected connection between ideas, a moment of wonder that catches the light just right.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Welcome",
    slug: "welcome-to-magpies-journal",
    featured: true
  },
  {
    title: "The Power of Weekly Reflection",
    excerpt: "There's something magical about setting aside time each week to pause, reflect, and make sense of the experiences we've gathered. In our rush through daily life, these moments of contemplation often get pushed aside.",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Reflection",
    slug: "power-of-weekly-reflection"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <main className="blog-container py-16">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Weekly insights, stories, and reflections from a curious mind
            </p>
          </div>
          
          <div className="grid gap-8 md:gap-6 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
