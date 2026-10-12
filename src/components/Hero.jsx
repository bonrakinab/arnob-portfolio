import { useEffect,useRef,useState } from 'react';
import { PROFILE } from '../data';

export default function Hero(){
  const heroRef=useRef(null),videoRef=useRef(null),visible=useRef(true);
  const [hasVideo,setHasVideo]=useState(true),[soundOn,setSoundOn]=useState(false),[blocked,setBlocked]=useState(true);

  useEffect(()=>{
    const el=videoRef.current;if(!el||!hasVideo)return;
    let cleaned=false;
    const unlock=async()=>{if(cleaned||!visible.current)return;try{el.muted=false;await el.play();setSoundOn(true);setBlocked(false);cleanupUnlock()}catch{}};
    const cleanupUnlock=()=>['pointerdown','keydown','touchend'].forEach(t=>removeEventListener(t,unlock));
    const attempt=async()=>{try{el.muted=false;await el.play();setSoundOn(true);setBlocked(false)}catch{el.muted=true;setSoundOn(false);setBlocked(true);el.play().catch(()=>{});['pointerdown','keydown','touchend'].forEach(t=>addEventListener(t,unlock,{passive:true}))}};
    attempt();
    const io=new IntersectionObserver(([entry])=>{visible.current=entry.intersectionRatio>=.35;if(!visible.current)el.pause();else el.play().catch(()=>{})},{threshold:[0,.35,1]});
    heroRef.current&&io.observe(heroRef.current);
    return()=>{cleaned=true;cleanupUnlock();io.disconnect()};
  },[hasVideo]);

  const toggleSound=async()=>{const el=videoRef.current;if(!el)return;if(soundOn){el.muted=true;setSoundOn(false)}else{try{el.muted=false;await el.play();setSoundOn(true);setBlocked(false)}catch{el.muted=true;setBlocked(true)}}};

  return <section className="hero" ref={heroRef} aria-labelledby="hero-title">
    <div className="ghost-name" aria-hidden="true">{PROFILE.firstName}</div>
    <div className="hero-stage rv">
      <div className="stage-frame">
        {hasVideo?<video ref={videoRef} autoPlay loop playsInline preload="auto" poster={PROFILE.portrait} onError={()=>setHasVideo(false)}><source src="/assets/intro.webm" type="video/webm"/><source src="/assets/intro.mp4" type="video/mp4"/></video>:<img src={PROFILE.portrait} alt="Arnob Banik"/>}
        {hasVideo&&<button className={`sound-button ${soundOn?'on':''} ${blocked&&!soundOn?'blocked':''}`} onClick={toggleSound} aria-label={soundOn?'Mute introduction':'Play introduction with sound'}>{soundOn?'Ⅱ':'▶'}</button>}
      </div>
    </div>
    <div className="hero-copy rv" style={{'--i':1}}>
      <p className="eyebrow">{PROFILE.location} · Open to opportunities</p>
      <h1 id="hero-title">{PROFILE.role}.</h1>
      <div className="hero-actions"><a className="button primary" href="#work">Explore work</a><a className="button outline" href={'mailto:'+PROFILE.email}>Let's talk</a><a className="text-button" href={PROFILE.resume} download>Résumé ↓</a></div>
    </div>
    <a className="scroll-cue" href="#about">Scroll <span>↓</span></a>
  </section>;
}