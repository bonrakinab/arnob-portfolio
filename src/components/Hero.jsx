export const Hero = () => {
  const viewWork = (event) => {
    event.preventDefault();
    const target = document.getElementById('projects');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#projects');
  };

  return (
    <section id="about" className="portfolio-section container mx-auto px-6 pt-10 pb-20">
    <div className="hero-layout">
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl border border-white/20 profile-glass">
          <img
            src="/assets/arnob.JPG"
            alt="Arnob Banik"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="text-center lg:text-left">
        <p className="section-eyebrow">Windsor, Ontario · Open to opportunities</p>
        <h1 className="text-5xl sm:text-6xl font-bold mt-3 mb-4 text-white">Arnob Banik</h1>
        <h2 className="hero-role">AI &amp; Full-Stack Software Developer</h2>
        <p className="hero-summary">
          MSc Computer Science (Artificial Intelligence) graduate building intelligent automation platforms,
          information-retrieval systems and secure full-stack products. I combine applied AI research with
          production-minded TypeScript, Python, cloud and enterprise-systems experience.
        </p>

        <div className="hero-actions">
          <a href="#projects" onClick={viewWork} className="primary-cta">View featured work</a>
          <a href="/assets/Arnob_Banik_Resume.pdf" download className="secondary-cta">
            <i className="fa-solid fa-download" aria-hidden="true"></i>
            Download résumé
          </a>
          <a href="mailto:arnob.bnk@gmail.com" className="text-link-cta">Email me</a>
        </div>

        <div className="hero-facts" aria-label="Professional highlights">
          <span>MSc Computer Science (AI)</span>
          <span>Full-stack &amp; applied AI</span>
          <span>Enterprise systems experience</span>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/arnob-banik-377417232/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
          </a>
          <a href="https://github.com/bonrakinab/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-hidden="true"></i> GitHub
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};
