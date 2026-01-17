import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', path: '/services#web' },
      { name: 'Mobile Apps', path: '/services#mobile' },
      { name: 'UI/UX Design', path: '/services#design' },
      { name: 'Cloud Solutions', path: '/services#cloud' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Work', path: '/work' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-section-dark border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">H</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Hack<span className="text-gradient">Jack</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Building scalable digital products that drive growth for startups and enterprises worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/hackjack-consultancy-services/"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/hackjack.tech/"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram size={18} />
              </a>
             
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hackjackdevteam@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  <span>hackjackdevteam@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918010077453"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  <span>+91 8010077453</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>Karave Nagar,<br/> Pune, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} HackJack. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
