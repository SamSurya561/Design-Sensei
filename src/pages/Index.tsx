import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import CourseCard from "@/components/ui/course-card";
import TestimonialCard from "@/components/ui/testimonial-card";
import PricingCard from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, MessageCircle, Sparkles } from "lucide-react";
import courseUiUx from "@/assets/course-ui-ux.jpg";
import courseGraphic from "@/assets/course-graphic.jpg";
import avatar1 from "@/assets/avatar-1.jpg";

const Index = () => {
  const featuredCourses = [
    {
      title: "Complete UI/UX Design Masterclass",
      description: "Master the fundamentals of user interface and user experience design with hands-on projects and real-world applications.",
      instructor: "Yuki Tanaka",
      duration: "12 weeks",
      students: 2500,
      rating: 4.9,
      price: "$299",
      level: "Intermediate" as const,
      image: courseUiUx
    },
    {
      title: "Advanced Graphic Design & Branding",
      description: "Create stunning visual identities and brand systems using Japanese design principles and modern tools.",
      instructor: "Akira Saito",
      duration: "8 weeks",
      students: 1800,
      rating: 4.8,
      price: "$249",
      level: "Advanced" as const,
      image: courseGraphic
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior UX Designer",
      company: "Google",
      content: "Design Sensei transformed my approach to design. The Japanese-inspired methodology and mentorship program gave me the confidence to land my dream job at Google.",
      rating: 5,
      avatar: avatar1
    },
    {
      name: "Marcus Johnson",
      role: "Creative Director",
      company: "Adobe",
      content: "The attention to detail and philosophical approach to design thinking sets Design Sensei apart. My team now incorporates these principles in all our projects.",
      rating: 5,
      avatar: avatar1
    }
  ];

  const pricingPlans = [
    {
      title: "Student",
      price: "$29",
      period: "month",
      description: "Perfect for beginners starting their design journey",
      features: [
        "Access to 10+ fundamental courses",
        "Community forum access",
        "Basic project templates",
        "Email support"
      ],
      buttonText: "Start Free Trial"
    },
    {
      title: "Professional",
      price: "$79",
      period: "month",
      description: "Ideal for designers looking to advance their skills",
      features: [
        "Access to all courses",
        "1-on-1 monthly mentorship",
        "Premium project templates",
        "Portfolio review sessions",
        "Industry networking events",
        "Priority support"
      ],
      popular: true,
      buttonText: "Go Professional"
    },
    {
      title: "Master",
      price: "$149",
      period: "month",
      description: "Complete mastery with unlimited mentorship",
      features: [
        "Everything in Professional",
        "Unlimited mentorship sessions",
        "Custom learning path",
        "Real client project opportunities",
        "Industry certifications",
        "Job placement assistance"
      ],
      buttonText: "Become a Master"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Courses Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass-card mb-6">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Featured Courses</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Learn from the <span className="gradient-text">Best</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked courses designed by industry experts to accelerate your design career
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="glass hover-lift">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Design Sensei</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center hover-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Japanese Philosophy</h3>
              <p className="text-muted-foreground">
                Learn design through the lens of Japanese aesthetics, emphasizing simplicity, harmony, and purposeful creation.
              </p>
            </div>

            <div className="glass-card text-center hover-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Mentorship</h3>
              <p className="text-muted-foreground">
                Get personalized guidance from industry professionals who have worked with top global brands.
              </p>
            </div>

            <div className="glass-card text-center hover-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real Projects</h3>
              <p className="text-muted-foreground">
                Work on actual client projects and build a portfolio that showcases your skills to potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Students Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Learning Path</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible plans designed to fit your learning goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Design Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of designers who have transformed their careers with Design Sensei
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 hover-glow">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass hover-lift">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">DS</span>
                </div>
                <span className="text-xl font-bold">Design Sensei</span>
              </div>
              <p className="text-secondary-foreground/80">
                Elevating design education through Japanese philosophy and modern methodology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Graphic Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Typography</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 Design Sensei. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
