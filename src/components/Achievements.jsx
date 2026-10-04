import { useEffect, useRef, useState } from 'react';
import { ACHIEVEMENTS } from '../data';

export default function Achievements(){
  const wrap=useRef(null);
  const [p,setP]=useState(0);
  useEffect(()=>{
    const onScroll=()=>{
      if(!wrap.current||innerWidth<800) return;
      const r=wrap.current.getBoundingClientRect();
      const total=wrap.current.offsetHeight-innerHeight;
      setP(Math.max(0,Math.min(1,-r.top/Math.max(total,1))));
    };
    onScroll(); addEventListener('scroll',onScroll,{passive:true}); addEventListener('resize',onScroll);
    return()=>{removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll);};
  },[]);
  return <section id="achievements" className="achievements-wrap" ref={wrap}>
    <div className="achievements-sticky section">
      <div className="achievements-head"><div className="section-tag"><span>06</span> — Measured impact</div><div className="achievement-progress"><i style={{transform:`scaleX(${p})`}}/></div></div>
      <div className="achievement-track" style={{'--progress':p}}>
        {ACHIEVEMENTS.map((a,i)=><article className="achievement-card" key={a.label}><div><span>{String(i+1).padStart(2,'0')} / {String(ACHIEVEMENTS.length).padStart(2,'0')}</span><p>{a.label}</p></div><div><strong>{a.number}</strong><p>{a.caption}</p><small>{a.detail}</small></div></article>)}
        <article className="achievement-card end-card"><strong>and counting →</strong></article>
      </div>
    </div>
  </section>;
}