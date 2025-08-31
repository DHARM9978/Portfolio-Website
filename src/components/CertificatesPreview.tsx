import { Link } from 'react-router-dom';
import { Award, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample featured certificates - replace with actual data
const featuredCertificates = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    description: "Advanced React development concepts including hooks, context, and performance optimization",
    skills: ["React", "JavaScript", "Frontend"],
    credentialUrl: "#"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "The Complete Web Developer Course",
    date: "2023",
    description: "Comprehensive full-stack development covering both frontend and backend technologies",
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    credentialUrl: "#"
  }
];

export const CertificatesPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-secondary-text text-lg max-w-2xl mx-auto">
              Continuous learning and professional development through certified courses.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredCertificates.map((certificate) => (
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

          {/* View All Button */}
          <div className="text-center">
            <Button
              asChild
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3"
            >
              <Link to="/certificates">
                View All Certificates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};