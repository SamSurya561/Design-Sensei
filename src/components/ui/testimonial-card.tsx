import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  content,
  rating,
  avatar
}: TestimonialCardProps) => {
  return (
    <div className="glass-card hover-lift relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary/20">
        <Quote className="w-8 h-8" />
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? "text-yellow-400 fill-current" 
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-foreground mb-6 leading-relaxed">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <div className="font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">
            {role} at {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;