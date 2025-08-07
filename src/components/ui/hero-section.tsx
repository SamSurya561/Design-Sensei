import { ArrowRight, Play, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Design workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full animate-float hidden lg:block"></div>
      <div className="absolute top-40 right-20 w-16 h-16 glass rounded-lg animate-float animation-delay-1000 hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 glass rounded-full animate-float animation-delay-2000 hidden lg:block"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium">Trusted by 10,000+ Designers</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Master Design with
              <span className="block gradient-text">Design Sensei</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your creative journey with Japanese-inspired design principles, 
              real-world projects, and personalized mentorship from industry experts.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-lift hover-glow group"
            >
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 glass hover-lift group"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="glass-card hover-lift">
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold">10,000+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
              </div>
            </div>
            <div className="glass-card hover-lift">
              <div className="flex items-center justify-center space-x-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
              </div>
            </div>
            <div className="glass-card hover-lift">
              <div className="flex items-center justify-center space-x-3">
                <Star className="w-8 h-8 text-primary fill-current" />
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;