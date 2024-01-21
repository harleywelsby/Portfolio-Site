import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
  });

  return (
    <>
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
