import { useEffect, useRef } from 'react';
import HomeSection from './sections/HomeSection';
import { Section } from './styles/styledComponents';

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
  });

  return (
    <>
      <HomeSection />
      <Section className="hidden whiteBackground">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </Section>
      <section className="hidden">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </section>
      <section className="hidden">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </section>
      <section className="hidden">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </section>
      <section className="hidden">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </section>
      <section className="hidden">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </section>
      <section className="hidden">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </section>
      <section className="hidden">
        <h1>Test Title</h1>
        <p>Lorem Ipsum</p>
      </section>
    </>
  );
}

export default App;
