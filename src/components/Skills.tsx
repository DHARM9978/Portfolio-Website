import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    color: 'text-green-600 dark:text-green-400'
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'Linux'],
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    title: 'Other Skills',
    skills: ['Responsive Design', 'Problem Solving', 'Team Collaboration', 'Agile'],
    color: 'text-orange-600 dark:text-orange-400'
  }
];

export const Skills = () => {
  const [githubLanguages, setGithubLanguages] = useState<string[]>([]);

  useEffect(() => {
    const fetchGithubLanguages = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DHARM9978/repos?per_page=100');
        const repos = await response.json();
        
        // Extract unique languages from repositories
        const languages = new Set<string>();
        repos.forEach((repo: any) => {
          if (repo.language && !repo.fork) {
            languages.add(repo.language);
          }
        });
        
        setGithubLanguages(Array.from(languages));
      } catch (error) {
        console.error('Error fetching GitHub languages:', error);
      }
    };

    fetchGithubLanguages();
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-secondary-text text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the technologies I work with.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category) => (
              <Card key={category.title} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className={`text-lg ${category.color}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub Languages */}
          {githubLanguages.length > 0 && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">
                  Programming Languages (from GitHub)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {githubLanguages.map((language) => (
                    <Badge
                      key={language}
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};