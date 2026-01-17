interface TechBadgeProps {
  name: string;
  icon?: string;
}

const TechBadge = ({ name, icon }: TechBadgeProps) => {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-colors group">
      {icon && (
        <img src={icon} alt={name} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" />
      )}
      <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  );
};

export default TechBadge;
