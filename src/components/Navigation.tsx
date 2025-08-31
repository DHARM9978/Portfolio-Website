import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certificates', href: '/certificates' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleResumeDownload = () => {
    // Convert Google Drive link to direct download
    const fileId = '1oDQ6wtob83_gTZ9Tdk6x_9Rvv1F6pETF';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Dharm_Bhadani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Dharm Bhadani
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors relative ${
                    location.pathname === link.href
                      ? 'text-primary font-medium'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                onClick={handleResumeDownload}
                className="bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="border-border bg-card"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`py-2 px-4 rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  onClick={handleResumeDownload}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16" />
    </>
  );
};