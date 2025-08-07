import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline";
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText,
  buttonVariant = "default"
}: PricingCardProps) => {
  return (
    <div className={`glass-card hover-lift relative ${
      popular ? "border-primary/50 hover-glow" : ""
    }`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-4xl font-bold gradient-text">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button 
        className={`w-full ${
          popular 
            ? "bg-primary hover:bg-primary/90 hover-glow" 
            : buttonVariant === "outline" 
              ? "glass hover-lift" 
              : "bg-primary hover:bg-primary/90"
        }`}
        variant={buttonVariant}
        size="lg"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;