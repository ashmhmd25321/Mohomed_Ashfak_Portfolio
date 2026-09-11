import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Marquee from "./components/system/Marquee";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-void text-ivory">
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Marquee />
        <Projects />
        <Testimonials />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
