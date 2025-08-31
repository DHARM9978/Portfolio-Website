import { useState, useEffect } from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
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
  updated_at: string;
}

import { Navigation } from '@/components/Navigation';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DHARM9978/repos?sort=updated&per_page=20');
        const data = await response.json();
        // Filter out forks and sort by updated date
        const filteredProjects = data
          .filter((repo: any) => !repo.fork && repo.description)
          .slice(0, 12); // Show top 12 projects
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
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
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
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h1>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                  {/* Last Updated */}
                  <p className="text-xs text-secondary-text">
                    Updated {new Date(project.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-border hover:bg-muted"
          >
            <a
              href="https://github.com/DHARM9978"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;