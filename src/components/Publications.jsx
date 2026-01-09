import React from 'react';

const Publications = () => {
  const publications = [
    {
      title: "Concerns of Indian Population on Covid-19 Vaccine Shortage Amidst Second Wave Infection Rate Spikes: A Social Media Opinion Analysis",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-07869-9_8",
      journal: "Springer",
      icon: "fas fa-book"
    },
    {
      title: "AI Based Cloud Failure Detection and Prevention Algorithm",
      link: "https://ieeexplore.ieee.org/document/10434295",
      journal: "IEEE",
      icon: "fas fa-microchip"
    },
    {
      title: "Smart Helmet And Monitoring For Miners With Enhanced Protection",
      link: "https://ieeexplore.ieee.org/document/10212305",
      journal: "IEEE",
      icon: "fas fa-microchip"
    },
    {
      title: "PHISH Methodology Applied to Algorithms for Preserving Gene Ontology Hierarchies with Disarray Hashing",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5110995",
      journal: "SSRN",
      icon: "fas fa-file-pdf"
    },
    {
      title: "Cyberchondria and perceived stress as mediated by fear of pandemic fear: A pandemic and post-pandemic comparative study from India",
      link: "https://www.researchgate.net/publication/378300328_Cyberchondria_and_perceived_stress_as_mediated_by_fear_of_pandemic_fear_A_pandemic_and_post-pandemic_comparative_study_from_India#full-text",
      journal: "ResearchGate",
      icon: "fas fa-flask"
    }
  ];

  return (
    <section id="publications" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {publications.map((pub, index) => (
          <div key={index} className="card p-6 relative">
            <h3 className="text-lg font-bold mb-4 text-white pr-12">{pub.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{pub.journal}</p>
            <a 
              className="pub-link" 
              href={pub.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Read on ${pub.journal}`}
              title={`Read on ${pub.journal}`}
            >
              <i className={pub.icon}></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
