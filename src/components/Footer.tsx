
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Tutors', href: '/tutors' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'A-Level Tutoring',
    'GCSE Support',
    'University Admissions',
    'Online Tutoring',
  ];

  return (
    <footer className="bg-pa-dark border-t border-pa-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-logo font-bold text-xl text-pa-text">
              Provost Academics
            </h3>
            <p className="text-pa-text-muted text-sm leading-relaxed">
              Professional tutoring services and university admissions guidance from experienced educators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pa-text-muted hover:text-pa-text transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-pa-text-muted hover:text-pa-text transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-pa-text-muted hover:text-pa-text transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pa-text-muted hover:text-pa-text transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-pa-text">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-pa-text-muted hover:text-pa-text transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-pa-text">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-pa-text-muted text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-pa-text">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-pa-text-muted" />
                <a 
                  href="mailto:info@provostacademics.co.uk" 
                  className="text-pa-text-muted hover:text-pa-text transition-colors text-sm"
                >
                  info@provostacademics.co.uk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-pa-text-muted" />
                <a 
                  href="tel:+441234567890" 
                  className="text-pa-text-muted hover:text-pa-text transition-colors text-sm"
                >
                  +44 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pa-card mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-pa-text-muted text-sm">
            © 2024 Provost Academics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-pa-text-muted hover:text-pa-text transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-pa-text-muted hover:text-pa-text transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
