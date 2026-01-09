import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ContactForm } from './components/ContactForm';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Awards from './components/Awards';
import ModernGradientBackground from './components/ModernGradientBackground';

function App() {
  return (
    <>
      <ModernGradientBackground />
      <Navbar />
      <main id="main-content" className="pt-24">
        <Hero />
        <div className="container mx-auto px-6 py-12">
          <Experience />
          <Extracurriculars />
          <Education />
          <Projects />
          <Skills />
          <Certifications />
          <Publications />
          <Awards />
          <ContactForm />
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;