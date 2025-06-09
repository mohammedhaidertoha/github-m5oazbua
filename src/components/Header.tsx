import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Tutors', href: '/tutors' },
    { name: 'Services', href: '/services' },
    { name: 'University Admissions', href: '/admissions' },
    { name: 'Resources', href: '/resources' },
    { name: 'Become a Tutor', href: '/apply-to-tutor' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-pa-black/95 backdrop-blur-md border-b border-pa-border shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/placeholder_logo.png" 
                alt="Provost Academics" 
                className="h-12 transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pa-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.href) 
                    ? 'text-pa-accent bg-pa-card/50' 
                    : 'text-pa-text-secondary hover:text-pa-text hover:bg-pa-card/30'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pa-accent rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild variant="ghost" className="text-pa-text-secondary hover:text-pa-text hover:bg-pa-card/30 transition-all duration-300">
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button asChild className="btn-primary hover-lift">
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-pa-text hover:bg-pa-card/30 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-pa-border animate-fade-in-down">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive(item.href) 
                      ? 'text-pa-accent bg-pa-card/50' 
                      : 'text-pa-text-secondary hover:text-pa-text hover:bg-pa-card/30'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-6 border-t border-pa-border mt-4">
                <Button asChild variant="ghost" className="w-full justify-start text-pa-text-secondary hover:text-pa-text hover:bg-pa-card/30">
                  <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                </Button>
                <Button asChild className="w-full btn-primary">
                  <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;