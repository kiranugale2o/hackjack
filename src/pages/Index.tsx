import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Server, 
  Cloud, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native for iOS and Android.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love and drive engagement.',
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      description: 'Robust backend systems and RESTful APIs that scale with your business.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and GCP infrastructure for reliable, scalable deployments.',
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: '24/7 support and continuous improvements to keep your products running smoothly.',
    },
  ];

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  const testimonials = [
    {
      quote: "HackJack transformed our outdated platform into a modern, scalable solution. Their team's expertise and dedication exceeded all our expectations.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Inc",
    },
    {
      quote: "Working with HackJack was a game-changer. They delivered our MVP in record time, allowing us to secure our Series A funding.",
      author: "Marcus Johnson",
      role: "Founder",
      company: "StartupHub",
    },
    {
      quote: "The mobile app HackJack built for us has over 100k downloads and a 4.9-star rating. Couldn't ask for better partners.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "FitLife App",
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development with rapid iterations to get your product to market faster.',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing and code reviews ensure reliable, bug-free software.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Expert developers committed to your project from start to finish.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in">
              🚀 Software Development Company
            </span>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Building Scalable Digital Products That{' '}
              <span className="text-gradient">Drive Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We help startups and enterprises build world-class web apps, mobile apps, and SaaS platforms using cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div>
                <p className="font-heading font-bold text-3xl md:text-4xl text-foreground">150+</p>
                <p className="text-muted-foreground text-sm md:text-base">Projects Delivered</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl md:text-4xl text-foreground">50+</p>
                <p className="text-muted-foreground text-sm md:text-base">Happy Clients</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl md:text-4xl text-foreground">5+</p>
                <p className="text-muted-foreground text-sm md:text-base">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Our Services"
            title="What We Build"
            description="From concept to deployment, we deliver end-to-end software solutions tailored to your business needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-32 bg-section-dark">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Tech Stack"
            title="Technologies We Use"
            description="We leverage the latest and most reliable technologies to build robust, scalable solutions."
          />

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all"
                />
                <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                badge="Why HackJack"
                title="Your Trusted Technology Partner"
                description="We combine technical excellence with business acumen to deliver solutions that truly matter."
                centered={false}
              />

              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
                <h4 className="font-heading font-bold text-2xl text-foreground mb-6">
                  What You Get
                </h4>
                <ul className="space-y-4">
                  {[
                    'Dedicated project manager',
                    'Transparent communication',
                    'Agile development process',
                    'Quality code & documentation',
                    'Post-launch support',
                    '100% satisfaction guarantee',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-section-dark">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our clients have to say about working with us."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ready to Build Something{' '}
              <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and see how we can help you achieve your goals. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="mailto:hello@hackjack.dev">hello@hackjack.dev</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
