import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'FinanceFlow',
      description: 'A comprehensive fintech platform for personal finance management with AI-powered insights and investment tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      industry: 'Fintech',
    },
    {
      title: 'HealthHub',
      description: 'Telemedicine platform connecting patients with healthcare providers through video consultations and appointment scheduling.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop&q=60',
      tags: ['React Native', 'Express', 'PostgreSQL'],
      industry: 'Healthcare',
    },
    {
      title: 'ShopEase',
      description: 'Multi-vendor e-commerce marketplace with advanced inventory management and real-time analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60',
      tags: ['Next.js', 'Stripe', 'Prisma', 'Vercel'],
      industry: 'E-commerce',
    },
    {
      title: 'LearnPath',
      description: 'Online learning platform with interactive courses, progress tracking, and gamification features for student engagement.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60',
      tags: ['React', 'GraphQL', 'Firebase'],
      industry: 'EdTech',
    },
    {
      title: 'PropManage',
      description: 'Property management SaaS for landlords and property managers with tenant portal and maintenance tracking.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60',
      tags: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
      industry: 'Real Estate',
    },
    {
      title: 'FitTrack Pro',
      description: 'Mobile fitness application with workout plans, nutrition tracking, and social features for fitness enthusiasts.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      industry: 'Health & Fitness',
    },
    {
      title: 'LogiTrack',
      description: 'Supply chain and logistics management platform with real-time tracking, route optimization, and analytics.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60',
      tags: ['React', 'Python', 'Redis', 'AWS'],
      industry: 'Logistics',
    },
    {
      title: 'EventPro',
      description: 'Event management and ticketing platform with virtual event capabilities and attendee engagement tools.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60',
      tags: ['Next.js', 'Stripe', 'WebRTC', 'Vercel'],
      industry: 'Events',
    },
    {
      title: 'HRConnect',
      description: 'Human resources management system with recruitment, onboarding, performance reviews, and payroll integration.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Azure'],
      industry: 'HR Tech',
    },
  ];

  const industries = ['All', 'Fintech', 'Healthcare', 'E-commerce', 'EdTech', 'Real Estate', 'Logistics'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Portfolio
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Projects That{' '}
              <span className="text-gradient">Deliver Results</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects across various industries. Each project represents our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, index) => (
              <button
                key={industry}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-section-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '98%', label: 'Client Retention' },
              { number: '4.9/5', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-bold text-4xl md:text-5xl text-gradient mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
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
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can bring your vision to life with our expertise and passion for excellence.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
