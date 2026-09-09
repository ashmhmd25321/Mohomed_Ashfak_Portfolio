import React, { useEffect, useState } from "react";
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
import Cursor from "./components/system/Cursor";
import Loader from "./components/system/Loader";
import { personalInfo } from "./data/mock";

function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(
      `%c ${personalInfo.name} %c\nCurious? You're already in the universe.\nPress G to open GitHub.`,
      "background:#e24a3b;color:#f3eee6;padding:6px 10px;font-family:monospace;",
      "color:#9c968c;padding:8px 0;font-family:monospace;"
    );
  }, []);

  return (
    <div className="App bg-void text-ivory">
      {booting && <Loader onDone={() => setBooting(false)} />}
      <div className="grain" aria-hidden="true" />
      <Cursor />
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
