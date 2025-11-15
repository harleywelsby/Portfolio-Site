import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import './shared/styles/App.css';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
    </>
  );
}

export default App;
