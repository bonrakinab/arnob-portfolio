const publications = [
  {
    title: 'Concerns of Indian Population on Covid-19 Vaccine Shortage Amidst Second Wave Infection Rate Spikes: A Social Media Opinion Analysis',
    venue: 'Springer',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-07869-9_8'
  },
  {
    title: 'AI Based Cloud Failure Detection and Prevention Algorithm',
    venue: 'IEEE',
    link: 'https://ieeexplore.ieee.org/document/10434295'
  },
  {
    title: 'Smart Helmet And Monitoring For Miners With Enhanced Protection',
    venue: 'IEEE',
    link: 'https://ieeexplore.ieee.org/document/10212305'
  },
  {
    title: 'PHISH Methodology Applied to Algorithms for Preserving Gene Ontology Hierarchies with Disarray Hashing',
    venue: 'SSRN',
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5110995'
  },
  {
    title: 'Cyberchondria and perceived stress as mediated by fear of pandemic fear: A pandemic and post-pandemic comparative study from India',
    venue: 'ResearchGate',
    link: 'https://www.researchgate.net/publication/378300328_Cyberchondria_and_perceived_stress_as_mediated_by_fear_of_pandemic_fear_A_pandemic_and_post-pandemic_comparative_study_from_India#full-text'
  }
];

const Publications = () => (
  <section id="research" className="portfolio-section mb-24">
    <div className="section-heading">
      <p className="section-eyebrow">Academic work</p>
      <h2>Research &amp; Publications</h2>
    </div>

    <article className="research-highlight">
      <div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="status-badge">MSc thesis</span>
          <span className="text-sm text-gray-400">Defended August 17, 2026</span>
        </div>
        <h3>Augmented Color Input in CIR Requirements</h3>
        <p>
          Adds explicit palette and RGB constraints to composed-image retrieval without replacing the semantic
          backbone. Text and palette requirements are represented as RGB boxes, checked using 3D IoU and routed
          through prebuilt voxel partitions.
        </p>
      </div>
      <div className="research-metrics">
        <div><strong>1.52 ms</strong><span>Prebuilt-2 amortized cost at Q=1000</span></div>
        <div><strong>4.66 ms</strong><span>Mean HNSW search time</span></div>
        <div><strong>ETD accepted</strong><span>University public release pending</span></div>
      </div>
    </article>

    <h3 className="text-2xl font-bold text-white mt-14 mb-6">Selected publications</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {publications.map((publication) => (
        <a
          key={publication.title}
          className="publication-card"
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <span>{publication.venue}</span>
            <h4>{publication.title}</h4>
          </div>
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      ))}
    </div>
  </section>
);

export default Publications;
