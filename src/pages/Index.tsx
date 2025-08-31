import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { ProjectsPreview } from '@/components/ProjectsPreview';
import { CertificatesPreview } from '@/components/CertificatesPreview';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <CertificatesPreview />
      <Contact />
    </div>
  );
};

export default Index;
