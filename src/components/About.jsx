import { useState } from 'react';
import { PROFILE } from '../data';

export default function About(){
  const [flip,setFlip]=useState(false);
  return <section id="about" className="section about-section">
    <div className="section-tag rv"><span>01</span> — About</div>
    <div className="about-grid">
      <div className="about-copy rv">
        <h2>Engineer by training.<br/><em>Builder by instinct.</em></h2>
        <p>{PROFILE.summary}</p>
        <p>I work across applied AI, full-stack product engineering and enterprise systems—turning ambiguous problems into systems that are measurable, maintainable and usable.</p>
        <div className="inline-links"><a href={PROFILE.resume} download>Résumé</a><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>

      <div className="lanyard-wrap rv" style={{'--i':1}}>
        <div className="strap"><span>ARNOB BANIK · AI ENGINEER · FULL-STACK DEVELOPER ·</span></div>
        <div className="clip" />
        <button className={'id-card '+(flip?'flipped':'')} onClick={()=>setFlip(v=>!v)} aria-label="Flip developer ID card">
          <span className="card-face front">
            <b className="id-band">DEVELOPER ID</b>
            <img src={PROFILE.portrait} alt="" />
            <strong>{PROFILE.name}</strong>
            <small>{PROFILE.role}</small>
            <span className="id-row"><i>ID NO.</i><b>AB-2026</b></span>
            <span className="id-row"><i>DEPT.</i><b>AI + SOFTWARE</b></span>
            <span className="barcode" aria-hidden="true" />
          </span>
          <span className="card-face back">
            <b>WHAT I AM</b>
            <p>MSc Computer Science (AI).</p>
            <p>Applied AI researcher.</p>
            <p>Full-stack product builder.</p>
            <p>Enterprise systems engineer.</p>
            <p>Problem solver across research and production.</p>
            <span className="signature">Arnob Banik</span>
          </span>
        </button>
      </div>

      <aside className="quick-facts rv" style={{'--i':2}}>
        <p className="mini-label">Quick facts</p>
        <dl>
          <div><dt>Based in</dt><dd>Windsor, Ontario</dd></div>
          <div><dt>Graduate degree</dt><dd>MSc CS · Artificial Intelligence</dd></div>
          <div><dt>Focus</dt><dd>AI · Full-stack · Enterprise systems</dd></div>
          <div><dt>Email</dt><dd><a href={'mailto:'+PROFILE.email}>{PROFILE.email}</a></dd></div>
        </dl>
        <blockquote>Build the useful thing, measure it, then make it simpler.</blockquote>
      </aside>
    </div>
  </section>;
}