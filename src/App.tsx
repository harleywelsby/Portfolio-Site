import { useEffect, useRef } from 'react';
import HomeSection from './sections/Home/HomeSection';
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
      {/* <Navbar /> */}
      <HomeSection />
      {/* <AboutSection /> */}
      {/* TODO: Add Portfolio from GitHub */}
      {/* <PortfolioSection /> */}
      <ResearchSection />
      <FooterSection />
    </>
  );
}

export default App;
