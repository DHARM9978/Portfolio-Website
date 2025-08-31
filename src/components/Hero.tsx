import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/DHARM9978/',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dharm-bhadani-9a1577304/',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:bhadanidharm9968@gmail.com',
    icon: Mail,
  },
];

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dharm Bhadani
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-text mb-8 max-w-2xl">
              A passionate <span className="text-primary font-semibold">Full Stack Developer</span> crafting digital experiences with modern technologies and creative solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-border hover:bg-muted hover:border-primary transition-all duration-300"
                >
                  <a
                    href={link.url}
                    target={link.name === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Learn More About Me
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>

          {/* Profile Image */}
          <div className={`flex-shrink-0 order-first lg:order-last transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-card">
                <img
                  src={profilePhoto}
                  alt="Dharm Bhadani"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};