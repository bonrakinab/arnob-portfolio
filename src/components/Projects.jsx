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
    label: 'Machine Learning & NLP',
    title: 'Phishing URL Detection',
    summary: 'A phishing-detection system that evaluates URL patterns with classical machine-learning and transformer-based approaches.',
    built: 'Prepared and balanced URL features with TF-IDF and SMOTE, compared Random Forest, Decision Tree, Logistic Regression and BERT-based models, and delivered predictions through a Flask interface.',
    impact: 'Demonstrated that the best-performing models could identify malicious URLs with over 99% precision and recall on a large real-world dataset.',
    metrics: ['235,795 URLs', 'Over 99% precision & recall', 'Flask web interface'],
    tech: ['Python', 'BERT', 'scikit-learn', 'TF-IDF', 'Flask'],
    status: 'Source available',
    links: [
      { label: 'Source', href: 'https://github.com/bonrakinab/Phishing-URL-Detection-Using-Artificial-Intelligence', icon: 'fab fa-github' }
    ]
  },
  {
    label: 'Predictive Analytics',
    title: 'Student Dropout Analysis',
    summary: 'A predictive-analytics study for identifying students at risk of dropping out from academic and demographic records.',
    built: 'Processed 4,424 student records, applied PCA and five-fold cross-validation, and compared Random Forest, AdaBoost and other classification models.',
    impact: 'The best-performing ensemble approach reached 78% predictive accuracy, supporting earlier identification of students who may need academic intervention.',
    metrics: ['4,424 student records', '78% accuracy', '5-fold cross-validation'],
    tech: ['Python', 'Pandas', 'Random Forest', 'AdaBoost', 'PCA'],
    status: 'Source available',
    links: [
      { label: 'Source', href: 'https://github.com/bonrakinab/Student-Dropout-Analysis-and-Prediction-Using-Machine-Learning-Algorithms', icon: 'fab fa-github' }
    ]
  },
  {
    label: 'Computer Vision',
    title: 'Plant Disease Diagnosis',
    summary: 'An image-classification workflow for recognizing plant diseases from leaf images.',
    built: 'Developed and compared CNN, ResNet34 and VGG16 architectures, then connected the classification workflow to a Flask-based interface.',
    impact: 'Created an end-to-end comparative system for evaluating deep-learning architectures and making plant-disease predictions accessible through the web.',
    metrics: ['CNN, ResNet34 & VGG16', 'Image classification', 'Flask web interface'],
    tech: ['Python', 'TensorFlow', 'Computer Vision', 'Flask'],
    status: 'Source available',
    links: [
      { label: 'Source', href: 'https://github.com/bonrakinab/Plant-Disease-Diagnosis', icon: 'fab fa-github' }
    ]
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

const ProjectCard = ({ project, number }) => (
  <article className="featured-project">
    <div className="featured-project-header">
      <div>
        <p className="project-index">{String(number).padStart(2, '0')} · {project.label}</p>
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
        <ProjectCard key={project.title} project={project} number={index + 1} />
      ))}
    </div>

    <div className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-6">Additional projects</h3>
      <div className="space-y-8">
        {supportingProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            number={featuredProjects.length + index + 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
