import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./shared/styles/App.css";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
      <Research />
    </>
  );
}

export default App;
