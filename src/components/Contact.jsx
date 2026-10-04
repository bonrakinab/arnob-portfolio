import { useState } from 'react';
import { PROFILE } from '../data';

export default function Contact(){
  const [copied,setCopied]=useState(false);
  const copy=async()=>{await navigator.clipboard?.writeText(PROFILE.email);setCopied(true);setTimeout(()=>setCopied(false),1600)};
  return <footer id="contact" className="contact section">
    <div className="section-tag rv"><span>07</span> — Contact</div>
    <h2 className="rv">Let's build<br/><em>something together.</em></h2>
    <div className="email-line rv"><a href={'mailto:'+PROFILE.email}>{PROFILE.email}</a><button onClick={copy} aria-live="polite">{copied?'Copied ✓':'Copy'}</button></div>
    <div className="contact-links rv"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={PROFILE.resume} download>Résumé ↓</a></div>
    <div className="footer-line"><span>© {new Date().getFullYear()} {PROFILE.name}</span><span>Built with React · deployed on Vercel</span><a href="#main">Back to top ↑</a></div>
  </footer>;
}