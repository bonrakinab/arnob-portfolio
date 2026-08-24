const featuredProjects = [
  {
    label: 'Applied AI Research',
    title: 'Color-Aware Composed Image Retrieval',
    summary: 'A palette-aware fashion retrieval system that combines a reference image, modification text and explicit RGB colour input.',
    built: 'Fine-tuned CLIP RN50x4 fusion, RGB-box consistency with 3D IoU, voxelized colour partitions and HNSW/exact-scan routing over FashionIQ.',
    impact: 'Introduced colour constraints without retraining or replacing the semantic retrieval backbone. At Q=1000, the Prebuilt-2 configuration reached 1.52 ms amortized cost per query.',
    metrics: ['77,684 FashionIQ images', '1.52 ms/query at Q=1000', 'Thesis defended Aug 2026'],
    tech: ['Python', 'PyTorch', 'CLIP', 'HNSW', 'Computer Vision', 'Information Retrieval'],
    status: 'University release pending',
    links: []
  },
  {
    label: 'Full-Stack AI Platform',
    title: 'Job Application Intelligence Dashboard',
    summary: 'A human-in-the-loop platform that discovers public jobs, filters hard eligibility constraints, ranks fit and prepares truthful application materials.',
    built: 'Next.js dashboard with Supabase/PostgreSQL persistence, RLS, Gemini/OpenAI analysis, ATS-friendly PDF generation, Gmail digests and public ATS connectors.',
    impact: 'Tracks a 148-company employer watchlist through four scheduled discovery workers while keeping human approval between generated materials and official applications.',
    metrics: ['148 target companies', '4 scheduled workers', 'ATS PDFs + Gmail digests'],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gemini', 'OpenAI', 'Vercel'],
    status: 'Live',
    links: [
      { label: 'Live dashboard', href: 'https://job-application-dashboard-fx6j.vercel.app', icon: 'fa-solid fa-arrow-up-right-from-square' },
      { label: 'Source', href: 'https://github.com/bonrakinab/job-application-dashboard', icon: 'fab fa-github' }
    ]
  },
  {
    label: 'Full-Stack Product',
    title: 'Flowdesk',
    summary: 'A personal and household CRM that brings tickets, schedules, notes, finances, medication and focus tools into one secure workspace.',
    built: 'Next.js and TypeScript application with Auth.js, Prisma, Neon/PostgreSQL, multi-user isolation, 40+ authenticated API routes, PWA support and a Capacitor Android shell.',
    impact: 'Unifies Kanban, calendar, reminders, finance, medication, notes and alerts in a deployable multi-user product.',
    metrics: ['40+ authenticated routes', 'PWA + Android', 'Multi-user isolation'],
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Neon', 'Auth.js', 'Capacitor'],
    status: 'Live',
    links: [
      { label: 'Live app', href: 'https://flowdesk-banik.vercel.app', icon: 'fa-solid fa-arrow-up-right-from-square' },
      { label: 'Source', href: 'https://github.com/bonrakinab/flowdesk', icon: 'fab fa-github' }
    ]
  }
];

const supportingProjects = [
  {
    title: 'Phishing URL Detection',
    description: 'Evaluated classical machine-learning and transformer approaches on approximately 235,000 URLs, achieving over 99% precision and recall with a Flask interface.',
    tech: ['Python', 'BERT', 'scikit-learn', 'TF-IDF', 'Flask'],
    href: 'https://github.com/bonrakinab/Phishing-URL-Detection-Using-Artificial-Intelligence'
  },
  {
    title: 'Student Dropout Analysis',
    description: 'Analysed 4,424 student records using PCA, cross-validation and ensemble models, reaching 78% predictive accuracy.',
    tech: ['Python', 'Pandas', 'Random Forest', 'AdaBoost', 'PCA'],
    href: 'https://github.com/bonrakinab/Student-Dropout-Analysis-and-Prediction-Using-Machine-Learning-Algorithms'
  },
  {
    title: 'Plant Disease Diagnosis',
    description: 'Built an image-classification workflow comparing CNN, ResNet34 and VGG16 models for plant-disease recognition.',
    tech: ['Python', 'TensorFlow', 'Computer Vision', 'Flask'],
    href: 'https://github.com/bonrakinab/Plant-Disease-Diagnosis'
  }
];

const ProjectLinks = ({ links }) => (
  <div className="project-links">
    {links.map((link) => (
      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
        <i className={link.icon} aria-hidden="true"></i> {link.label}
      </a>
    ))}
  </div>
);

const Projects = () => (
  <section id="projects" className="portfolio-section mb-24">
    <div className="section-heading">
      <p className="section-eyebrow">Selected systems</p>
      <h2>Featured Work</h2>
      <p>Research and products that show how I approach real problems—from retrieval design to secure production workflows.</p>
    </div>

    <div className="space-y-8">
      {featuredProjects.map((project, index) => (
        <article key={project.title} className="featured-project">
          <div className="featured-project-header">
            <div>
              <p className="project-index">0{index + 1} · {project.label}</p>
              <h3>{project.title}</h3>
            </div>
            <span className="status-badge">{project.status}</span>
          </div>

          <p className="featured-summary">{project.summary}</p>

          <div className="case-study-grid">
            <div>
              <h4>What I built</h4>
              <p>{project.built}</p>
            </div>
            <div>
              <h4>Outcome</h4>
              <p>{project.impact}</p>
            </div>
          </div>

          <div className="metric-row">
            {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
          </div>

          <div className="project-footer">
            <div className="tech-tags">
              {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            {project.links.length > 0 && <ProjectLinks links={project.links} />}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-6">Additional projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportingProjects.map((project) => (
          <article key={project.title} className="supporting-project">
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
            <div>
              <div className="tech-tags compact">
                {project.tech.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-source-link">
                <i className="fab fa-github" aria-hidden="true"></i> View source
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
