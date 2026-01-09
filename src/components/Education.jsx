import React from 'react';

const Education = () => (
  <section id="education" className="mb-20">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
    <div className="relative max-w-5xl mx-auto space-y-6 px-4 sm:px-6">
      <div className="relative flex items-start gap-6">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 via-amber-400 to-orange-500 text-white font-bold shadow-lg ring-4 ring-slate-950/60 hover:shadow-[0_0_20px_rgba(255,193,7,0.6)] transition-all duration-300 cursor-pointer">
          1
        </div>
        <div className="card flex-1 p-6 border border-white/10 bg-slate-900/50 shadow-lg">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-white">University of Windsor</h3>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-200 border border-green-400/40">Current</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-100 border border-indigo-400/40">Graduate</span>
          </div>
          <p className="text-gray-300 mb-1">Master of Science (MS), Computer Science</p>
          <p className="text-gray-400 text-sm">Specialization: Artificial Intelligence</p>
          <p className="text-gray-400 text-sm">Sep 2024 — Sep 2026</p>
        </div>
      </div>

      <div className="pl-[10px] flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold shadow-sm border border-white/15">
          <span className="text-sm text-gray-100">⇡</span>
          <span className="tracking-[0.12em] uppercase text-gray-100">Next step</span>
        </div>
      </div>

      <div className="relative flex items-start gap-6">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 text-white font-bold shadow-lg ring-4 ring-slate-950/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300 cursor-pointer">
          2
        </div>
        <div className="card flex-1 p-6 border border-white/10 bg-slate-900/50 shadow-lg">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-white">Vellore Institute of Technology</h3>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-100 border border-blue-400/40">Undergraduate</span>
          </div>
          <p className="text-gray-300 mb-1">Bachelor of Technology (B.Tech), Computer Science and Engineering</p>
          <p className="text-gray-400 text-sm">Jul 2019 — Jul 2023</p>
        </div>
      </div>

      <div className="pl-[10px] flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold shadow-sm border border-white/15">
          <span className="text-sm text-gray-100">⇡</span>
          <span className="tracking-[0.12em] uppercase text-gray-100">Foundation</span>
        </div>
      </div>

      <div className="relative flex items-start gap-6">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white font-bold shadow-lg ring-4 ring-slate-950/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-pointer">
          3
        </div>
        <div className="card flex-1 p-6 border border-white/10 bg-slate-900/50 shadow-lg">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-white">St. Francis Xavier's Greenherald International School</h3>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-100 border border-purple-400/40">School</span>
          </div>
          <p className="text-gray-300 mb-1">O-Levels and A-Levels, Science and Mathematics</p>
          <p className="text-gray-400 text-sm">Jun 2005 — Jun 2019</p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
