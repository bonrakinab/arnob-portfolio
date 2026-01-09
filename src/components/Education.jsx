import React from 'react';

const Education = () => (
  <section id="education" className="mb-20">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-2 text-white">University of Windsor</h3>
        <p className="text-gray-300 mb-1">Master of Science - MS, Computer Science</p>
        <p className="text-gray-400 text-sm">Specialization in Artificial Intelligence</p>
        <p className="text-gray-400 text-sm">September 2024 - September 2026</p>
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-2 text-white">Vellore Institute of Technology</h3>
        <p className="text-gray-300 mb-1">Bachelor of Technology - BTech, Computer Science and Engineering</p>
        <p className="text-gray-400 text-sm">July 2019 - July 2023</p>
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-2 text-white">St. Francis Xavier's Greenherald International School</h3>
        <p className="text-gray-300 mb-1">O-Levels and A-Levels, Science and Mathematics</p>
        <p className="text-gray-400 text-sm">June 2005 - June 2019</p>
      </div>
    </div>
  </section>
);

export default Education;
