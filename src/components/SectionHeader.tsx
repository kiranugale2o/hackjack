interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
