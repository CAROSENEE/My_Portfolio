import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FluidBackground from "./components/FluidBackground";

function App() {
  return (
    <>
      <FluidBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;