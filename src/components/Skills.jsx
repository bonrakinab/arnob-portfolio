import { useMemo,useState } from 'react';
import { SKILLS } from '../data';
import TechLogo from './TechLogo';

const FAMILIES=['All','Languages','Frontend','Backend','Databases','Tools','Concepts'];
export default function Skills(){
  const [family,setFamily]=useState('All'),[selected,setSelected]=useState(SKILLS[0]);
  const visible=useMemo(()=>SKILLS.map(s=>({...s,dim:family!=='All'&&s.family!==family})),[family]);
  return <section id="skills" className="section skills-section">
    <div className="section-tag rv"><span>02</span> — Technical stack</div>
    <div className="heading-row rv"><h2>The periodic table<br/>of my <em>stack.</em></h2><p>Skills grouped from my résumé, with the projects and systems where I use them.</p></div>
    <div className="filter-row rv">{FAMILIES.map(f=><button key={f} className={family===f?'active':''} onClick={()=>setFamily(f)}>{f}</button>)}</div>
    <div className="skills-layout">
      <div className="periodic-grid">
        {visible.map((s,i)=>{const row=Math.floor(i/8),col=i%8;return <button key={s.name} className={`element rv ${s.dim?'dim':''}`} style={{'--wave':`${(row+col)*40}ms`}} onMouseEnter={()=>setSelected(s)} onFocus={()=>setSelected(s)} onClick={()=>setSelected(s)}>
          <span className="element-top"><small>{String(i+1).padStart(2,'0')}</small><TechLogo name={s.name} logo={s.logo} concept={s.concept} size="xs" className="element-logo"/></span>
          <strong>{s.symbol}</strong><span className="element-name">{s.name}</span><em>{s.family}</em>
        </button>})}
      </div>
      <aside className="skill-inspector rv">
        <div className="inspector-logo-wrap" key={selected.name}><TechLogo name={selected.name} logo={selected.logo} concept={selected.concept} size="xl"/></div>
        <p className="mini-label">{selected.family}</p><h3>{selected.name}</h3><p className="used-title">Used in</p><ul>{selected.projects.map(p=><li key={p}>{p}</li>)}</ul>
      </aside>
    </div>
  </section>;
}