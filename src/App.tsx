import { useEffect, useRef } from 'react';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ResearchSection from './sections/ResearchSection';
import FooterSection from './sections/FooterSection';
import { Navbar } from './components/Navbar';

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
      <Navbar />
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
