import { useEffect, useRef } from 'react';
import HomeSection from './sections/Home/HomeSection';
import ResearchSection from './sections/Research/ResearchSection';
import FooterSection from './sections/Footer/FooterSection';
import ProjectsSection from './sections/Projects/ProjectsSection';
import ContactSection from './sections/Contact/ContactSection';

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
      {/* <Navbar /> */}
      <HomeSection />
      <ProjectsSection />
      <ResearchSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
