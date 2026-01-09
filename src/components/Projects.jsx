import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Plant Disease Diagnosis",
      description: "Developed an advanced system using Python and Deep Learning models (CNN, RESNET34, VGG16) to diagnose plant diseases from images.",
      github: "https://github.com/bonrakinab/Plant-Disease-Diagnosis",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Gevent", "Flask"]
    },
    {
      title: "Student Dropout Analysis",
      description: "Predicted student dropouts with 78% accuracy using machine learning, identifying key risk factors to improve student retention.",
      github: "https://github.com/bonrakinab/Student-Dropout-Analysis-and-Prediction-Using-Machine-Learning-Algorithms",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"]
    },
    {
      title: "Phishing URL Detection",
      description: "Built an AI-based system using machine learning and LLMs to detect phishing URLs with over 99% precision, featuring a Flask-based UI.",
      github: "https://github.com/bonrakinab/Phishing-URL-Detection-Using-Artificial-Intelligence",
      tech: ["Python", "Scikit-learn", "Flask", "LLM"]
    },
    {
      title: "Go-Live of ESS Tax Engine Revamp",
      description: "Revamped the ESS tax engine, reducing tax conditions from 15K to 450 and fixing PO/Invoice calculation issues with faster maintenance cycles.",
      // github: "",
      tech: ["Oracle ESS", "Tax Rules", "Process Automation"]
    },
    {
      title: "EDMS Migration to New Physical Server",
      description: "Migrated EDMS production to new hardware, covering SQL connectivity, IIS setup, EDMS install, auth config, and SAN drive remapping.",
      // github: "",
      tech: ["SQL Server", "IIS", "EDMS", "Windows Auth", "SAN Storage"]
    },
    {
      title: "DNA Testing",
      description: "Engineered a DNA testing tool using Knuth–Morris–Pratt for accurate pattern matching and similarity scoring on DNA samples.",
      github: "https://github.com/bonrakinab/DNA-TESTING",
      tech: ["C++", "Knuth–Morris–Pratt", "Algorithms"]
    },
    {
      title: "Inventory Management System",
      description: "Built an inventory manager with CRUD operations, optimized for small organizations to categorize and maintain product data.",
      github: "https://github.com/bonrakinab/Inventory-Management-",
      tech: ["SQL", "PHP", "HTML", "CSS", "XAMPP"]
    }
  ];

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="card flex flex-col justify-between h-full p-6">
            <div>
              <div className="flex items-center mb-4 relative">
                <i className="fa-solid fa-folder fa-2x text-pink-400 mr-4"></i>
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener"
                    aria-label={`View ${proj.title} on GitHub`}
                    title="Open GitHub"
                    className="proj-link"
                  >
                    <i className="fab fa-github fa-xl text-white hover:text-gray-400"></i>
                  </a>
                ) : (
                  <div
                    className="proj-link placeholder"
                    aria-label={`Repo link for ${proj.title} coming soon`}
                    title="Repo link coming soon"
                  >
                    <i className="fa-solid fa-sparkles fa-lg text-white"></i>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
            </div>
            <div className="mt-4 text-sm text-gray-400 font-mono flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <span key={i}>{t}{i < proj.tech.length - 1 ? ', ' : ''}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
