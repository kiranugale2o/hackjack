import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

const TestimonialCard = ({ quote, author, role, company, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
