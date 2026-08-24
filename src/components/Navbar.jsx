import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Research', id: 'research' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#' + id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={'fixed top-0 left-0 right-0 z-50 transition-all ' + (scrolled ? 'nav-scrolled' : 'nav-transparent')}>
      <nav className="container mx-auto px-6 py-4" aria-label="Primary navigation">
        <div className="flex justify-between items-center">
          <a href="#about" onClick={(event) => navigateTo(event, 'about')} className="flex items-center">
            <img src="/assets/profile.svg" alt="Arnob Banik home" className="h-11 w-auto min-w-[150px]" />
          </a>

          <div className="hidden lg:flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={'#' + item.id}
                onClick={(event) => navigateTo(event, item.id)}
                className="text-gray-300 hover:text-white focus-visible:text-white transition"
              >
                {item.label}
              </a>
            ))}
            <a className="nav-resume-link" href="/assets/Arnob_Banik_Resume.pdf" download>
              Résumé
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden rounded-lg p-2 text-gray-200 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <i className={'fas ' + (mobileMenuOpen ? 'fa-times' : 'fa-bars') + ' fa-lg'}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 mobile-menu-bg rounded-xl p-2 shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={'#' + item.id}
                onClick={(event) => navigateTo(event, item.id)}
                className="block py-3 px-4 text-sm text-gray-200 hover:bg-white/10 rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <a className="block py-3 px-4 text-sm font-semibold text-cyan-300" href="/assets/Arnob_Banik_Resume.pdf" download>
              Download résumé
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
