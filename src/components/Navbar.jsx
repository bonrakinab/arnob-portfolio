import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all bg-black/10 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/assets/profile.svg" alt="Arnob Banik" className="h-12 w-auto min-w-[160px]" />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 text-sm">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a>
            <a href="#extracurriculars" className="text-gray-300 hover:text-white transition">Extracurriculars</a>
            <a href="#education" className="text-gray-300 hover:text-white transition">Education</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#certifications" className="text-gray-300 hover:text-white transition">Certifications</a>
            <a href="#publications" className="text-gray-300 hover:text-white transition">Publications</a>
            <a href="#awards" className="text-gray-300 hover:text-white transition">Awards</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 mobile-menu-bg rounded-lg">
            <a href="#about" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">About</a>
            <a href="#experience" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Experience</a>
            <a href="#extracurriculars" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Extracurriculars</a>
            <a href="#education" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Education</a>
            <a href="#projects" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Projects</a>
            <a href="#skills" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Skills</a>
            <a href="#certifications" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Certifications</a>
            <a href="#publications" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Publications</a>
            <a href="#awards" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Awards</a>
            <a href="#contact" onClick={closeMobileMenu} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
