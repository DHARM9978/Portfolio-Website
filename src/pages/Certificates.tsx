import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample certificates data - replace with actual data
const certificates = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    description: "Advanced React development concepts including hooks, context, and performance optimization",
    skills: ["React", "JavaScript", "Frontend"],
    credentialUrl: "#",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "The Complete Web Developer Course",
    date: "2023",
    description: "Comprehensive full-stack development covering both frontend and backend technologies",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    credentialUrl: "#",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2023",
    description: "Advanced JavaScript programming and algorithmic thinking",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    credentialUrl: "#",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "TypeScript Fundamentals",
    issuer: "Microsoft Learn",
    date: "2023",
    description: "TypeScript fundamentals and advanced type system concepts",
    skills: ["TypeScript", "JavaScript", "Type Safety"],
    credentialUrl: "#",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "CSS Grid and Flexbox",
    issuer: "CSS Grid",
    date: "2022",
    description: "Modern CSS layout techniques for responsive web design",
    skills: ["CSS", "Responsive Design", "Layout"],
    credentialUrl: "#",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Git Version Control",
    issuer: "GitHub",
    date: "2022",
    description: "Advanced Git workflows and collaboration techniques",
    skills: ["Git", "Version Control", "Collaboration"],
    credentialUrl: "#",
    image: "/placeholder.svg"
  }
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates
          </h1>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Professional certifications and completed courses that demonstrate my commitment to continuous learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <Card key={certificate.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <Badge variant="secondary" className="text-xs">
                    {certificate.date}
                  </Badge>
                </div>
                <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                  {certificate.title}
                </CardTitle>
                <CardDescription className="text-secondary-text">
                  {certificate.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Description */}
                  <p className="text-sm text-secondary-text">
                    {certificate.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-border hover:bg-muted"
                    asChild
                  >
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-secondary-text">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my dedication to professional growth and excellence in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;