import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Server, 
  Cloud, 
  Headphones,
  ArrowRight,
  Globe,
  Database,
  Lock,
  Cpu,
  Layers,
  RefreshCw
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build modern, responsive, and high-performance web applications using the latest frameworks and technologies.',
      features: [
        'React & Next.js applications',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'Custom CMS solutions',
        'SaaS product development',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native-quality mobile applications for iOS and Android using React Native for faster development and consistent UX.',
      features: [
        'Cross-platform development',
        'Native iOS & Android apps',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, engaging, and visually stunning digital experiences.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design systems',
        'Usability testing',
        'Design handoff & documentation',
      ],
    },
    {
      icon: Server,
      title: 'Backend & API Development',
      description: 'Robust, scalable backend systems and APIs that power your applications with reliability and security.',
      features: [
        'RESTful & GraphQL APIs',
        'Microservices architecture',
        'Real-time data processing',
        'Third-party integrations',
        'Authentication & authorization',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'Modern cloud infrastructure and DevOps practices for reliable, scalable, and cost-effective deployments.',
      features: [
        'AWS, Azure, GCP setup',
        'CI/CD pipeline automation',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring & logging',
      ],
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly and securely.',
      features: [
        '24/7 monitoring',
        'Bug fixes & updates',
        'Performance optimization',
        'Security patches',
        'Feature enhancements',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: 'SEO & Performance',
      description: 'Optimize your web presence for search engines and lightning-fast load times.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient database architecture for optimal data management and retrieval.',
    },
    {
      icon: Lock,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to protect your digital assets.',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Incorporate machine learning and AI capabilities into your applications.',
    },
    {
      icon: Layers,
      title: 'System Architecture',
      description: 'Design scalable system architectures that grow with your business.',
    },
    {
      icon: RefreshCw,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, efficient applications.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              End-to-End Software{' '}
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From ideation to deployment and beyond, we provide comprehensive software development services to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 md:py-32 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Core Services"
            title="What We Do Best"
            description="Our primary services cover the full spectrum of software development needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-32 bg-section-dark">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="More Solutions"
            title="Additional Services"
            description="Specialized services to complement your core development needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            description="A proven development process that ensures quality and timely delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discover', description: 'Understand your needs and goals' },
              { step: '02', title: 'Design', description: 'Create wireframes and prototypes' },
              { step: '03', title: 'Develop', description: 'Build with agile methodology' },
              { step: '04', title: 'Deploy', description: 'Launch with confidence' },
              { step: '05', title: 'Support', description: 'Maintain and improve' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-xl bg-gradient-card border border-border text-center group hover:border-primary/50 transition-colors"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                
                {/* Arrow connector */}
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
