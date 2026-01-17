import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';
import Layout from '../components/Layout';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageSquare
} from 'lucide-react';
import { Input } from '../components/ui/input';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500));

  const whatsappMessage = `
New Customer Enquiry

Name: ${formData.name}
Email: ${formData.email}
Contact Number: ${formData.phone}

Enquiry Message:
${formData.message}

Please respond at your earliest convenience.
  `.trim();

  const whatsappNumber = '8010077453';
  const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, '_blank');

  toast({
    title: 'Enquiry Sent Successfully',
    description: 'Our team will contact you within 24 hours.',
  });

  setFormData({ name: '', email: '', phone: '', message: '' });
  setIsSubmitting(false);
};

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hackjackdevteam@gmail.com',
      link: 'mailto:hackjackdevteam@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 8010077453',
      link: 'tel:+918010077453',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Karave Nagar, Pune, India',
      link: 'https://www.google.com/maps/search/Panchasheel%2C+42%2F16%2C+Income+Tax+Lane%2C+Karve+Road%2C+Pune%2C+411004%2C+India',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri, 9AM-6PM PST',
      link: '#',
    },
  ];

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
              Contact Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Let's Build Something{' '}
              <span className="text-gradient">Amazing Together</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-border shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-foreground">Send a Message</h2>
                  <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a question about our services, pricing, or just want to say hello, we're here to help. Reach out through any of the channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.details}</p>
                  </a>
                ))}
              </div>

              {/* FAQ Preview */}
              <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'How long does a typical project take?',
                      a: 'Most projects take 2-6 months depending on complexity.',
                    },
                    {
                      q: 'Do you offer ongoing support?',
                      a: 'Yes, we provide maintenance and support packages.',
                    },
                    {
                      q: 'What is your pricing model?',
                      a: 'We offer both fixed-price and time & materials options.',
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <p className="font-medium text-foreground mb-1">{faq.q}</p>
                      <p className="text-muted-foreground text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Banner */}
      <section className="py-20 md:py-32 bg-section-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Based in Pune, Working Globally
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              While our headquarters is in the heart of Silicon Valley, we work with clients across the globe. Remote collaboration is in our DNA.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['North America', 'Europe', 'Asia Pacific', 'Latin America'].map((region) => (
                <span
                  key={region}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-muted-foreground border border-border"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
