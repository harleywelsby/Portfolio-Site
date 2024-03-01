import { useEffect, useRef } from 'react';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import PortfolioSection from './sections/PortfolioSection';
import ResearchSection from './sections/ResearchSection';
import FooterSection from './sections/FooterSection';

function App() {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.current!.observe(element));
  }, []);

  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      {/* TODO: Add Portfolio from GitHub */}
      {/* <PortfolioSection /> */}
      <ResearchSection />
      <FooterSection />
    </>
  );
}

export default App;
