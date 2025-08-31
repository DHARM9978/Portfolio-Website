import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code that follows best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with attention to detail.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Building fast, optimized applications that provide excellent user experience.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Deeply passionate about technology and continuous learning.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-secondary-text leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                I love creating digital experiences that are not only functional but also beautiful and user-friendly.
              </p>
              
              <p className="text-lg text-secondary-text leading-relaxed">
                My journey in web development started with curiosity about how websites work, and it has evolved 
                into a deep passion for crafting scalable applications using React, TypeScript, Node.js, and other 
                cutting-edge technologies.
              </p>

              <p className="text-lg text-secondary-text leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or learning about the latest trends in web development. I believe in continuous learning and staying 
                updated with the ever-evolving tech landscape.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-secondary-text">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-secondary-text">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-secondary-text">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-secondary-text">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-secondary-text">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};