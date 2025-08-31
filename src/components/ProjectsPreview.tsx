import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  topics: string[];
}

export const ProjectsPreview = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DHARM9978/repos?sort=updated&per_page=10');
        const data = await response.json();
        // Filter out forks and get top 2 projects
        const filteredProjects = data
          .filter((repo: any) => !repo.fork && repo.description)
          .slice(0, 2);
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-secondary-text text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-secondary-text">
                    {project.description || 'No description available'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Language & Topics */}
                    <div className="flex flex-wrap gap-2">
                      {project.language && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          {project.language}
                        </span>
                      )}
                      {project.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-border hover:bg-muted"
                      >
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-primary hover:bg-primary-hover text-primary-foreground"
                        >
                          <a
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
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
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};