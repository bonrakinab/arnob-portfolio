import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App(){
  useEffect(()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis=null;
    if(!reduce && window.Lenis){
      lenis=new window.Lenis({autoRaf:true,anchors:{offset:-88},smoothWheel:true,stopInertiaOnNavigate:true});
      window.__lenis=lenis;
    }
    const nodes=[...document.querySelectorAll('.rv')];
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-in');io.unobserve(entry.target)}
    }),{threshold:.12});
    nodes.forEach(node=>io.observe(node));
    return()=>{io.disconnect();lenis?.destroy();delete window.__lenis};
  },[]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Timeline />
      <Achievements />
      <Contact />
    </main>
  </>;
}