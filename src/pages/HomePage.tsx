import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Skills from '../components/Skills';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectGrid from '../components/ProjectGrid';
import Contact from '../components/Contact';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Introduction />
      <About />
      <Skills />
      <ExperienceTimeline />
      <ProjectGrid />
      <Contact />
    </>
  );
}
