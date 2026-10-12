import { useEffect,useLayoutEffect,useRef,useState } from 'react';
import { NAV,PROFILE } from '../data';

export default function Navbar(){
  const [open,setOpen]=useState(false),[active,setActive]=useState('about'),[progress,setProgress]=useState(0),[scrolled,setScrolled]=useState(false);
  const navRef=useRef(null),links=useRef({});
  const [pill,setPill]=useState({left:0,width:0});

  const placePill=()=>{const nav=navRef.current,el=links.current[active];if(nav&&el)setPill({left:el.offsetLeft,width:el.offsetWidth})};
  useLayoutEffect(placePill,[active]);
  useEffect(()=>{addEventListener('resize',placePill);return()=>removeEventListener('resize',placePill)},[active]);

  useEffect(()=>{
    const onScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;setProgress(max?scrollY/max:0);setScrolled(scrollY>40)};
    onScroll();addEventListener('scroll',onScroll,{passive:true});
    const sections=NAV.map(([id])=>document.getElementById(id)).filter(Boolean);
    const io=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-45% 0px -50% 0px'});
    sections.forEach(s=>io.observe(s));
    return()=>{removeEventListener('scroll',onScroll);io.disconnect()};
  },[]);

  useEffect(()=>{
    const esc=e=>e.key==='Escape'&&setOpen(false);addEventListener('keydown',esc);
    if(open){document.body.style.overflow='hidden';window.__lenis?.stop()}else{document.body.style.overflow='';window.__lenis?.start()}
    return()=>{removeEventListener('keydown',esc);document.body.style.overflow='';window.__lenis?.start()};
  },[open]);

  const go=(id,e)=>{if(window.__lenis){e.preventDefault();window.__lenis.scrollTo(id==='#main'?0:id,{offset:-86})}setOpen(false)};
  return <>
    <div className="scroll-progress" style={{transform:`scaleX(${progress})`}}/>
    <header className={`nav-shell ${scrolled?'scrolled':''}`}>
      <a className="brand" href="#main" onClick={e=>go('#main',e)} aria-label="Back to top"><span className="brand-mark">{PROFILE.initials}</span><b className="brand-name">{PROFILE.name}</b></a>
      <div className={`desktop-nav-shell ${scrolled?'glass':''}`}>
        <nav className="desktop-nav" ref={navRef} aria-label="Primary">
          <i className="nav-active-pill" style={{left:pill.left,width:pill.width}} aria-hidden="true"/>
          {NAV.map(([id,label])=><a ref={el=>links.current[id]=el} className={active===id?'active':''} href={'#'+id} onClick={e=>go('#'+id,e)} key={id}>{label}</a>)}
        </nav>
      </div>
      <button className="menu-button" onClick={()=>setOpen(true)} aria-label="Open menu">Menu</button>
    </header>
    <div className={`mobile-menu ${open?'open':''}`} aria-hidden={!open}>
      <button className="menu-close" onClick={()=>setOpen(false)} aria-label="Close menu">Close</button>
      <nav>{NAV.map(([id,label],i)=><a style={{'--i':i}} href={'#'+id} onClick={e=>go('#'+id,e)} key={id}><small>{String(i+1).padStart(2,'0')}</small>{label}</a>)}</nav>
    </div>
  </>;
}