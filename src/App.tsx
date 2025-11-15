import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./shared/styles/App.css";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Experience />
      <Research />
      <Footer />
    </>
  );
}

export default App;
