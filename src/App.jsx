import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App(){
  useEffect(() => {
    const nodes=[...document.querySelectorAll('.rv')];
    const io=new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
    }),{threshold:.12});
    nodes.forEach(n=>io.observe(n));
    return()=>io.disconnect();
  },[]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}