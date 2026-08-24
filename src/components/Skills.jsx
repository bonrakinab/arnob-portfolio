const skillGroups = [
  {
    title: 'Frontend',
    icon: 'fa-solid fa-display',
    description: 'Responsive, accessible product interfaces.',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'Tailwind CSS', 'Vite']
  },
  {
    title: 'Backend & Data',
    icon: 'fa-solid fa-database',
    description: 'APIs, persistence and secure application workflows.',
    skills: ['Node.js', 'Python', 'Flask', 'REST APIs', 'PostgreSQL', 'Supabase', 'Prisma', 'SQL']
  },
  {
    title: 'AI & Retrieval',
    icon: 'fa-solid fa-brain',
    description: 'Applied machine learning, vision and search systems.',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'CLIP', 'HNSW', 'BERT', 'GNNs', 'NLP', 'Computer Vision']
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fa-solid fa-cloud',
    description: 'Deployment, automation and reliable delivery practices.',
    skills: ['Vercel', 'AWS', 'OCI', 'Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Linux']
  },
  {
    title: 'Enterprise Systems',
    icon: 'fa-solid fa-building',
    description: 'Production support, governance and business systems.',
    skills: ['Oracle Fusion ERP', 'BI Publisher', 'Oracle Visual Builder', 'JIRA', 'EDMS', 'ISO 27001']
  }
];

const Skills = () => (
  <section id="skills" className="portfolio-section mb-24">
    <div className="section-heading">
      <p className="section-eyebrow">Technical toolkit</p>
      <h2>Skills</h2>
      <p>Technologies I have used across shipped products, academic research and enterprise operations.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((group) => (
        <article key={group.title} className="skill-group">
          <div className="skill-group-heading">
            <span><i className={group.icon} aria-hidden="true"></i></span>
            <div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>
          </div>
          <div className="tech-tags">
            {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
