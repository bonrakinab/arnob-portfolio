import { useState, useEffect } from 'react';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    { text: "Enterprise Solutions Engineer", color: "text-blue-400" },
    { text: "Data Analyst", color: "text-green-400" },
    { text: "Software Developer", color: "text-purple-400" },
    { text: "Oracle Techno-Functional Specialist", color: "text-red-400" },
    { text: "Problem Solver", color: "text-cyan-400" }
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex].text;
      
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] container mx-auto px-6 py-12">
      <div className="mb-8 md:mb-0 flex-shrink-0 flex justify-center md:block">
        <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-gray-800 profile-glass">
          <img 
            src="/assets/arnob.JPG" 
            alt="Arnob Banik" 
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="240" height="240"%3E%3Crect fill="%23374151" width="240" height="240"/%3E%3Ctext fill="%23fff" font-family="sans-serif" font-size="60" text-anchor="middle" x="120" y="140"%3EAB%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
      </div>
      
      <div className="md:w-3/4 md:pl-10 text-center md:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white">Arnob Banik</h1>
        <p className="text-xl text-gray-300 mb-6">
          I am a <span className={roles[roleIndex].color}>{roles[roleIndex].text.substring(0, charIndex)}<span className="typed-cursor">|</span></span>
        </p>
        
        <div className="flex space-x-6 justify-center md:justify-start mb-6">
          <a 
            href="https://linkedin.com/in/arnob-banik-377417232/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a 
            href="https://github.com/bonrakinab/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-gray-400 hover:text-white transition"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a 
            href="mailto:arnob.bnk@gmail.com" 
            aria-label="Email"
            className="text-gray-400 hover:text-red-500 transition"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
        
        <p className="text-gray-400 leading-relaxed">
          I leverage my strong expertise in Oracle Fusion support and related tasks to ensure the smooth operation of critical systems and processes. I govern financial documentation procedures for customers and suppliers, identify and resolve issues within the JIRA platform, and manage roles and conditions for BI development within the Oracle Fusion environment. I am passionate about deciphering insights from data and providing valuable and actionable information to support decision-making processes. I am a results-driven, problem-solving, and forward-thinking professional who strives to contribute to the dynamic landscape of technology and data management.
        </p>
      </div>
    </section>
  );
};