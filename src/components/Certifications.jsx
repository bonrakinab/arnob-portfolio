import { CERTIFICATIONS } from '../data';

export default function Certifications(){
  return <section className="cert-section">
    <div className="section cert-inner">
      <div className="cert-heading rv"><div className="section-tag"><span>05</span> — Certifications</div><h2>Always<br/><em>learning.</em></h2><p>{CERTIFICATIONS.length} verified credentials</p></div>
      <div className="cert-list">
        {CERTIFICATIONS.map((c,i)=><a className="cert-row rv" href={c.href} target="_blank" rel="noreferrer" key={c.name}>
          <span>{String(i+1).padStart(2,'0')}</span><div><strong>{c.name}</strong><small>{c.issuer}</small></div><b>↗</b>
        </a>)}
      </div>
    </div>
  </section>;
}