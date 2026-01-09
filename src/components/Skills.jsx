import React, { useState } from 'react';

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", proficiency: 95, logo: "https://img.icons8.com/color/48/000000/python.png" },
        { name: "Java", proficiency: 88, logo: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" },
        { name: "R", proficiency: 85, logo: "https://img.icons8.com/?size=100&id=CLvQeiwFpit4&format=png&color=000000" },
        { name: "C/C++", proficiency: 82, logo: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
        { name: "SQL", proficiency: 92, logo: "https://img.icons8.com/fluency/48/000000/sql.png" }
      ],
      glowColor: "neon-cyan"
    },
    {
      name: "Cloud & Enterprise Platforms",
      skills: [
        { name: "Office 365", proficiency: 90, logo: "https://img.icons8.com/?size=100&id=37619&format=png&color=000000" },
        { name: "GCP", proficiency: 87, logo: "https://img.icons8.com/color/48/000000/google-cloud.png" },
        { name: "Azure", proficiency: 89, logo: "https://img.icons8.com/color/48/000000/azure-1.png" },
        { name: "AWS", proficiency: 88, logo: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
        { name: "ERP Cloud", proficiency: 91, logo: "https://img.icons8.com/?size=100&id=39913&format=png&color=000000" },
        { name: "JIRA", proficiency: 93, logo: "https://img.icons8.com/color/48/000000/jira.png" }
      ],
      glowColor: "neon-blue"
    },
    {
      name: "Developer Tools & IDEs",
      skills: [
        { name: "Git", proficiency: 94, logo: "https://img.icons8.com/color/48/000000/git.png" },
        { name: "Docker", proficiency: 86, logo: "https://img.icons8.com/color/48/000000/docker.png" },
        { name: "VS Code", proficiency: 96, logo: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" },
        { name: "PyCharm", proficiency: 90, logo: "https://img.icons8.com/color/48/000000/pycharm.png" },
        { name: "IntelliJ", proficiency: 88, logo: "https://img.icons8.com/color/48/000000/intellij-idea.png" },
        { name: "Eclipse", proficiency: 85, logo: "https://img.icons8.com/color/48/000000/eclipse.png" }
      ],
      glowColor: "neon-green"
    },
    {
      name: "Core Competencies",
      skills: [
        { name: "Database Management", proficiency: 92, logo: "https://img.icons8.com/ios-filled/32/000000/database.png" },
        { name: "Data Analysis", proficiency: 90, logo: "https://img.icons8.com/ios-filled/32/000000/combo-chart.png" },
        { name: "Software Development", proficiency: 93, logo: "https://img.icons8.com/ios-filled/32/000000/source-code.png" },
        { name: "Machine Learning", proficiency: 88, logo: "https://img.icons8.com/ios-filled/32/000000/artificial-intelligence.png" },
        { name: "Statistical ML", proficiency: 87, logo: "https://img.icons8.com/ios-filled/32/000000/statistics.png" },
        { name: "Computational Geometry", proficiency: 84, logo: "https://img.icons8.com/ios-filled/32/000000/geometry.png" },
        { name: "CRM Systems", proficiency: 89, logo: "https://img.icons8.com/?size=100&id=kOS9Ac1kfEU1&format=png&color=000000" },
        { name: "Artificial Intelligence", proficiency: 86, logo: "https://img.icons8.com/ios-filled/32/000000/robot-2.png" }
      ],
      glowColor: "neon-purple"
    }
  ];

  const current = skillCategories[currentCategory];

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % skillCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <section id="skills" className="mb-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Skills</h2>
      <div className="max-w-5xl mx-auto px-6">
        {/* Category Navigation */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={prevCategory}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Previous skill category"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-center flex-1">
            <h3 className={`text-2xl font-bold ${current.glowColor}-text mb-2`}>
              {current.name}
            </h3>
            <div className="flex justify-center gap-2">
              {skillCategories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentCategory(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentCategory 
                      ? `${current.glowColor} w-8` 
                      : 'bg-gray-700 w-2'
                  }`}
                  aria-label={`Go to ${skillCategories[i].name}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextCategory}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Next skill category"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Skills Progress Bars */}
        <div className="space-y-4">
          {current.skills.map((skill, i) => (
            <div key={i} className="flex flex-col gap-2 group hover:scale-105 transition-transform">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} Logo`} 
                    className="w-6 h-6"
                  />
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                </div>
                <span className={`text-sm font-bold ${current.glowColor}-text`}>
                  {skill.proficiency}%
                </span>
              </div>
              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${current.glowColor} skill-bar`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
