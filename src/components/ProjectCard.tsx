interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  industry: string;
}

const ProjectCard = ({ title, description, image, tags, industry }: ProjectCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-lg">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
            {industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
