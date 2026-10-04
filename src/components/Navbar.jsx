import { useEffect, useState } from 'react';
import { NAV, PROFILE } from '../data';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState('about');
  const [progress,setProgress]=useState(0);

  useEffect(()=>{
    const onScroll=()=>{
      const max=document.documentElement.scrollHeight-innerHeight;
      setProgress(max ? scrollY/max : 0);
    };
    onScroll();
    addEventListener('scroll',onScroll,{passive:true});
    const sections=NAV.map(([id])=>document.getElementById(id)).filter(Boolean);
    const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-45% 0px -50% 0px'});
    sections.forEach(s=>io.observe(s));
    return()=>{removeEventListener('scroll',onScroll);io.disconnect();};
  },[]);

  useEffect(()=>{
    document.body.style.overflow=open?'hidden':'';
    const esc=e=>e.key==='Escape'&&setOpen(false);
    addEventListener('keydown',esc);
    return()=>{document.body.style.overflow='';removeEventListener('keydown',esc);};
  },[open]);

  return <>
    <div className="scroll-progress" style={{transform:`scaleX(${progress})`}} />
    <header className="nav-shell">
      <a className="brand" href="#main" aria-label="Back to top"><span>{PROFILE.initials}</span><b>{PROFILE.name}</b></a>
      <nav className="desktop-nav" aria-label="Primary">
        {NAV.map(([id,label])=><a className={active===id?'active':''} href={'#'+id} key={id}>{label}</a>)}
      </nav>
      <button className="menu-button" onClick={()=>setOpen(true)} aria-label="Open menu">Menu</button>
    </header>
    <div className={'mobile-menu '+(open?'open':'')} aria-hidden={!open}>
      <button className="menu-close" onClick={()=>setOpen(false)} aria-label="Close menu">Close</button>
      <nav>{NAV.map(([id,label],i)=><a href={'#'+id} onClick={()=>setOpen(false)} key={id}><small>{String(i+1).padStart(2,'0')}</small>{label}</a>)}</nav>
    </div>
  </>;
}