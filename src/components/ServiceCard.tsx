import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-lg hover:-translate-y-1">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 glow-subtle group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-foreground mb-3">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
