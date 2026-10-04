import { useMemo, useState } from 'react';
import { SKILLS } from '../data';

export default function Skills(){
  const families=['All',...new Set(SKILLS.map(s=>s.family))];
  const [family,setFamily]=useState('All');
  const [selected,setSelected]=useState(SKILLS[0]);
  const visible=useMemo(()=>SKILLS.map(s=>({...s,dim:family!=='All'&&s.family!==family})),[family]);
  return <section id="skills" className="section skills-section">
    <div className="section-tag rv"><span>02</span> — Technical stack</div>
    <div className="heading-row rv"><h2>The periodic table<br/>of my <em>stack.</em></h2><p>Tools I have used across shipped products, research and enterprise operations.</p></div>
    <div className="filter-row rv">{families.map(f=><button key={f} className={family===f?'active':''} onClick={()=>setFamily(f)}>{f}</button>)}</div>
    <div className="skills-layout">
      <div className="periodic-grid">
        {visible.map((s,i)=><button key={s.name} className={'element rv '+(s.dim?'dim':'')} style={{'--i':i%8}} onMouseEnter={()=>setSelected(s)} onFocus={()=>setSelected(s)} onClick={()=>setSelected(s)}>
          <small>{String(i+1).padStart(2,'0')}</small><strong>{s.symbol}</strong><span>{s.name}</span>
        </button>)}
      </div>
      <aside className="skill-inspector rv">
        <span className="inspector-symbol">{selected.symbol}</span>
        <p className="mini-label">{selected.family}</p>
        <h3>{selected.name}</h3>
        <p>{selected.used}</p>
      </aside>
    </div>
  </section>;
}