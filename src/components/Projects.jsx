import { useState } from 'react';
import { PROJECTS } from '../data';

function MiniVisual({type}){
  return <div className={'mini-ui '+type}>
    <div className="mini-top"><span/><span/><span/></div>
    <div className="mini-body">
      <div className="mini-side">{[1,2,3,4].map(x=><i key={x}/>)}</div>
      <div className="mini-content"><b/><b/><div className="mini-cards"><i/><i/><i/></div><span/></div>
    </div>
    <small>Illustrative UI</small>
  </div>
}

export default function Projects(){
  const [active,setActive]=useState(0);
  return <section id="work" className="section work-section">
    <div className="section-tag rv"><span>03</span> — Selected work</div>
    <div className="heading-row rv"><h2>Things I've<br/><em>built.</em></h2><p>Research and products that show how I approach real problems—from retrieval design to production workflows.</p></div>
    <div className="project-accordion">
      {PROJECTS.map((p,i)=><article key={p.title} className={'project-panel '+(active===i?'open':'')} onMouseEnter={()=>setActive(i)}>
        <button className="panel-trigger" onClick={()=>setActive(i)} aria-expanded={active===i}>
          <span>{String(i+1).padStart(2,'0')}</span><b>{p.title}</b><i>+</i>
        </button>
        <div className="panel-content">
          <div>
            <p className="mini-label">{p.kicker}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p>
            <ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul>
            <div className="project-metrics">{p.metrics.map(x=><span key={x}>{x}</span>)}</div>
            <div className="project-tech">{p.tech.map(x=><span key={x}>{x}</span>)}</div>
            <a className="project-link" href={p.href} target="_blank" rel="noreferrer">View project ↗</a>
          </div>
          <MiniVisual type={p.visual}/>
        </div>
      </article>)}
    </div>
  </section>;
}