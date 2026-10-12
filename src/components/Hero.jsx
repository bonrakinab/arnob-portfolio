import { useEffect,useRef,useState } from 'react';
import { PROFILE } from '../data';

const INTRO_TEXT=`Hi, I'm ${PROFILE.name}. I'm an AI engineer and full-stack developer. I build intelligent retrieval systems, automation platforms, and production-minded software.`;

export default function Hero(){
  const heroRef=useRef(null),videoRef=useRef(null),visible=useRef(true),unlockRef=useRef(null);
  const [mode,setMode]=useState('checking');
  const [videoSrc,setVideoSrc]=useState('');
  const [soundOn,setSoundOn]=useState(false);
  const [blocked,setBlocked]=useState(false);
  const [speaking,setSpeaking]=useState(false);

  useEffect(()=>{
    let cancelled=false;
    const check=async()=>{
      const candidates=[['/assets/intro.webm','video/webm'],['/assets/intro.mp4','video/mp4']];
      for(const [url] of candidates){
        try{
          const response=await fetch(url,{method:'HEAD',cache:'no-store'});
          if(response.ok){if(!cancelled){setVideoSrc(url);setMode('video')}return;}
        }catch{}
      }
      if(!cancelled)setMode('fallback');
    };
    check();
    return()=>{cancelled=true};
  },[]);

  useEffect(()=>{
    const section=heroRef.current;
    if(!section)return;
    const io=new IntersectionObserver(([entry])=>{
      visible.current=entry.intersectionRatio>=.35;
      if(mode==='video'&&videoRef.current){
        if(!visible.current)videoRef.current.pause();
        else videoRef.current.play().catch(()=>{});
      }
      if(mode==='fallback'&&'speechSynthesis' in window){
        if(!visible.current&&window.speechSynthesis.speaking)window.speechSynthesis.pause();
        else if(visible.current&&window.speechSynthesis.paused)window.speechSynthesis.resume();
      }
    },{threshold:[0,.35,1]});
    io.observe(section);
    return()=>io.disconnect();
  },[mode]);

  useEffect(()=>{
    if(mode!=='video'||!videoRef.current)return;
    const el=videoRef.current;
    let cleaned=false;
    const cleanup=()=>{
      if(unlockRef.current){['pointerdown','keydown','touchend'].forEach(t=>removeEventListener(t,unlockRef.current));unlockRef.current=null;}
    };
    const unlock=async()=>{
      if(cleaned||!visible.current)return;
      try{el.muted=false;await el.play();setSoundOn(true);setBlocked(false);cleanup()}catch{}
    };
    unlockRef.current=unlock;
    const attempt=async()=>{
      try{el.muted=false;await el.play();setSoundOn(true);setBlocked(false)}
      catch{el.muted=true;setSoundOn(false);setBlocked(true);el.play().catch(()=>{});['pointerdown','keydown','touchend'].forEach(t=>addEventListener(t,unlock,{passive:true,once:false}))}
    };
    attempt();
    return()=>{cleaned=true;cleanup()};
  },[mode,videoSrc]);

  useEffect(()=>()=>{'speechSynthesis' in window&&window.speechSynthesis.cancel()},[]);

  const speak=()=>{
    if(!('speechSynthesis' in window))return;
    window.speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(INTRO_TEXT);
    utterance.rate=.96;utterance.pitch=1;utterance.volume=1;
    utterance.onstart=()=>{setSpeaking(true);setSoundOn(true)};
    utterance.onend=()=>{setSpeaking(false);setSoundOn(false)};
    utterance.onerror=()=>{setSpeaking(false);setSoundOn(false)};
    window.speechSynthesis.speak(utterance);
  };

  const toggleSound=async()=>{
    if(mode==='video'){
      const el=videoRef.current;if(!el)return;
      if(soundOn){el.muted=true;setSoundOn(false)}
      else{try{el.muted=false;await el.play();setSoundOn(true);setBlocked(false)}catch{el.muted=true;setBlocked(true)}}
      return;
    }
    if(mode==='fallback'){
      if(speaking){window.speechSynthesis?.cancel();setSpeaking(false);setSoundOn(false)}else speak();
    }
  };

  const handleVideoError=()=>{setMode('fallback');setVideoSrc('');setSoundOn(false);setBlocked(false)};
  const hasAudioControl=mode==='video'||(mode==='fallback'&&typeof window!=='undefined'&&'speechSynthesis' in window);

  return <section className="hero" ref={heroRef} aria-labelledby="hero-title">
    <div className="ghost-name" aria-hidden="true">{PROFILE.firstName}</div>
    <div className="hero-stage rv">
      <div className={`stage-frame ${mode==='fallback'?'fallback-mode':''} ${speaking?'speaking':''}`}>
        {mode==='video'?<video ref={videoRef} autoPlay loop playsInline preload="auto" poster={PROFILE.portrait} onError={handleVideoError} src={videoSrc}/>:<div className="avatar-fallback"><span className="avatar-halo" aria-hidden="true"/><img src={PROFILE.portrait} alt={`${PROFILE.name} portrait`} /><span className="avatar-wave" aria-hidden="true"><i/><i/><i/><i/></span></div>}
        {mode==='checking'&&<span className="avatar-status" aria-live="polite">Loading intro…</span>}
        {mode==='fallback'&&<span className="avatar-status">Voice intro</span>}
        {hasAudioControl&&<button className={`sound-button ${soundOn?'on':''} ${blocked&&!soundOn?'blocked':''}`} onClick={toggleSound} aria-label={soundOn?'Mute introduction':'Play introduction with sound'}>{soundOn?'Ⅱ':'▶'}</button>}
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