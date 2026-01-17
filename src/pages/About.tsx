import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Lightbulb, 
  Shield, 
  Handshake,
  Rocket,
  MessageSquare,
  PenTool,
  Code,
  CheckCircle,
  HeartHandshake
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our code is built to last. We prioritize quality, security, and performance in everything we build.',
    },
    {
      icon: Handshake,
      title: 'Transparency',
      description: 'Open communication, honest timelines, and clear pricing. No surprises, just results.',
    },
    {
      icon: HeartHandshake,
      title: 'Partnership',
      description: 'We treat your business like our own. Your success is our success.',
    },
  ];

  const process = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Discover',
      description: 'We start by understanding your business, goals, and challenges. Through in-depth discussions, we identify the best approach for your project.',
    },
    {
      icon: PenTool,
      step: '02',
      title: 'Design',
      description: 'Our designers create wireframes and prototypes that visualize your solution. We iterate until the design perfectly matches your vision.',
    },
    {
      icon: Code,
      step: '03',
      title: 'Develop',
      description: 'Using agile methodology, we build your solution in sprints with regular demos. You stay involved throughout the development process.',
    },
    {
      icon: Rocket,
      step: '04',
      title: 'Deploy',
      description: 'We handle deployment to production environments with proper testing, CI/CD pipelines, and monitoring setup.',
    },
    {
      icon: CheckCircle,
      step: '05',
      title: 'Support',
      description: 'Our relationship doesn\'t end at launch. We provide ongoing support, maintenance, and continuous improvements.',
    },
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', initial: 'A' },
    { name: 'Sarah Williams', role: 'CTO', initial: 'S' },
    { name: 'Michael Park', role: 'Lead Developer', initial: 'M' },
    { name: 'Emily Johnson', role: 'Design Director', initial: 'E' },
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
              About Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              We Build the Future of{' '}
              <span className="text-gradient">Digital Products</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HackJack is a software development company dedicated to helping startups and enterprises build world-class digital products that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-border shadow-card">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative software solutions that transform ideas into reality. We strive to be the trusted technology partner that helps our clients navigate the digital landscape and achieve their full potential.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-border shadow-card">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a global leader in software development, recognized for our technical excellence, innovative solutions, and the lasting partnerships we build with our clients. We envision a world where technology enables every business to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-section-dark">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Our Values"
            title="What We Stand For"
            description="These core values guide everything we do and shape how we work with our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
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
            title="How We Bring Ideas to Life"
            description="A structured approach that ensures quality, transparency, and successful outcomes."
          />

          <div className="space-y-8">
            {process.map((item, index) => (
              <div
                key={item.step}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-primary font-heading font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-32 bg-border" />
                  )}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-section-dark">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            badge="Our Team"
            title="Meet the Experts"
            description="A talented team of developers, designers, and strategists passionate about building great software."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                    {member.initial}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
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
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's start a conversation about your next project and how we can help you succeed.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
