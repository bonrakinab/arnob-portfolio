import { useEffect,useRef,useState } from 'react';
import { PROFILE } from '../data';

export default function About(){
  const [flip,setFlip]=useState(false);const swing=useRef(null),velocity=useRef(0),target=useRef(0),angle=useRef(0),lastX=useRef(null),lastT=useRef(0),touch=useRef(false);
  useEffect(()=>{let raf;const tick=t=>{const idle=Math.sin(t/1350)*1.15;velocity.current+=(target.current-angle.current)*.035;velocity.current*=.88;angle.current+=velocity.current;if(swing.current)swing.current.style.transform=`rotateZ(${angle.current+idle}deg)`;target.current*=.93;raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf)},[]);
  const move=e=>{const now=performance.now();if(lastX.current!==null){const dt=Math.max(now-lastT.current,16),vx=(e.clientX-lastX.current)/dt;target.current=Math.max(-8,Math.min(8,vx*34))}lastX.current=e.clientX;lastT.current=now};
  const leave=()=>{lastX.current=null;target.current=0};
  const activate=e=>{if(e.detail===0||touch.current)setFlip(v=>!v);touch.current=false};
  return <section id="about" className="section about-section" onPointerMove={move} onPointerLeave={leave}>
    <div className="section-tag rv"><span>01</span> — About</div>
    <div className="about-grid">
      <div className="about-copy rv"><h2>Hi, I'm<br/><em>{PROFILE.name}.</em></h2><p>{PROFILE.summary}</p><p>{PROFILE.secondary}</p><div className="inline-links"><a href={PROFILE.resume} download>Résumé</a>{PROFILE.github&&<a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>}{PROFILE.linkedin&&<a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}</div></div>
      <div className="lanyard-wrap rv" style={{'--i':1}}><div className="strap"><span>{PROFILE.name.toUpperCase()} · {PROFILE.role.toUpperCase()} ·</span></div><div className="clip"/><div className="card-swing" ref={swing}><button className={`id-card ${flip?'flipped':''}`} onMouseEnter={()=>setFlip(true)} onMouseLeave={()=>setFlip(false)} onPointerDown={e=>{touch.current=e.pointerType==='touch'}} onClick={activate} aria-label="Flip developer ID card">
        <span className="card-face front"><b className="id-band">DEVELOPER ID</b><span className="portrait-ring"><img src={PROFILE.portrait} alt=""/></span><strong>{PROFILE.name}</strong><small>{PROFILE.role}</small><span className="id-row"><i>ID NO.</i><b>AB-2026</b></span><span className="id-row"><i>DEPT.</i><b>AI + SOFTWARE</b></span><span className="id-row"><i>VALID TILL</i><b>{PROFILE.graduationYear}</b></span><span className="id-bottom"><span className="barcode"/><i className="holo">AB</i></span></span>
        <span className="card-face back"><b>WHAT I AM</b><p>{PROFILE.role}</p><p>{PROFILE.degree}</p><p>{PROFILE.undergrad}</p><p>Color-Aware CIR · Phishing URL Detection</p><p>Oracle Fusion ERP · enterprise systems</p><span className="signature">Arnob Banik</span><span className="found">If found, say hello · {PROFILE.email}</span></span>
      </button></div></div>
      <aside className="quick-facts rv" style={{'--i':2}}><p className="mini-label">Quick facts</p><dl><div><dt>Location</dt><dd>{PROFILE.location}</dd></div><div><dt>Education</dt><dd>{PROFILE.degree}</dd></div><div><dt>Recent role</dt><dd>{PROFILE.recentRole}</dd></div><div><dt>Email</dt><dd><a href={'mailto:'+PROFILE.email}>{PROFILE.email}</a></dd></div></dl><blockquote>Applied AI research, built with production-minded software engineering.</blockquote></aside>
    </div>
  </section>;
}