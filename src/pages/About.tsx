import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Mail, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="blog-container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              About The Magpies Journal
            </h1>
            
            <Card className="card-shadow p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Welcome to The Magpies Journal – a weekly collection of thoughts, discoveries, 
                  and stories from someone who believes in the power of curiosity and the beauty 
                  of sharing ideas.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">Why Magpies?</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Like magpies, I'm drawn to shiny things – interesting ideas, beautiful stories, 
                  unexpected connections, and moments of wonder. This journal is my nest where I 
                  collect and share these treasures with you every week.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">What You'll Find Here</h2>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li>• Weekly reflections on life, creativity, and human nature</li>
                  <li>• Stories and insights from books, conversations, and experiences</li>
                  <li>• Thoughts on technology, culture, and the world around us</li>
                  <li>• Personal essays and observations</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">Join the Journey</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Thank you for being here. If these words resonate with you, if they spark 
                  a thought or bring a moment of joy, consider supporting this work. Every 
                  coffee helps keep the words flowing and the ideas shining.
                </p>
              </div>
            </Card>
            
            <div className="text-center space-y-4">
              {/* <Button variant="coffee" size="lg" className="text-lg px-8 py-3">
                <Coffee className="w-5 h-5" />
                Buy me a coffee
              </Button>
               */}
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  Get in touch
                </div>
                {/* <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  Share the love
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;