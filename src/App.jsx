import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ContactForm } from './components/ContactForm';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import ModernGradientBackground from './components/ModernGradientBackground';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ModernGradientBackground />
      <Navbar />
      <main id="main-content" className="pt-24">
        <Hero />
        <div className="container mx-auto px-6 py-12">
          <Projects />
          <Experience />
          <Publications />
          <Skills />
          <Education />
          <Certifications />
          <ContactForm />
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
