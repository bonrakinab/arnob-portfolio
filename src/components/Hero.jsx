import { useEffect, useRef, useState } from 'react';
import { PROFILE } from '../data';

export default function Hero(){
  const [hasVideo,setHasVideo]=useState(true);
  const [sound,setSound]=useState(false);
  const videoRef=useRef(null);

  useEffect(()=>{
    const el=videoRef.current;
    if(!el) return;
    const io=new IntersectionObserver(([e])=>{
      if(e.intersectionRatio<.35) el.pause();
      else el.play().catch(()=>{});
    },{threshold:[0,.35,1]});
    io.observe(el);
    return()=>io.disconnect();
  },[hasVideo]);

  const toggleSound=()=>{
    const el=videoRef.current;
    if(!el) return;
    el.muted=sound;
    setSound(!sound);
    el.play().catch(()=>{});
  };

  return <section className="hero" aria-labelledby="hero-title">
    <div className="ghost-name" aria-hidden="true">{PROFILE.firstName}</div>
    <div className="hero-copy rv">
      <p className="eyebrow">{PROFILE.location} · Open to opportunities</p>
      <h1 id="hero-title">I build intelligent<br/><em>software systems.</em></h1>
      <p>{PROFILE.summary}</p>
      <div className="hero-actions">
        <a className="button primary" href="#work">Explore work</a>
        <a className="button outline" href={'mailto:'+PROFILE.email}>Let's talk</a>
        <a className="text-button" href={PROFILE.resume} download>Résumé ↓</a>
      </div>
    </div>
    <div className="hero-stage rv" style={{'--i':1}}>
      <div className="stage-frame">
        {hasVideo ? <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={PROFILE.portrait} onError={()=>setHasVideo(false)}>
          <source src="/assets/intro.webm" type="video/webm"/>
          <source src="/assets/intro.mp4" type="video/mp4"/>
        </video> : <img src={PROFILE.portrait} alt="Arnob Banik" />}
        <span className="stage-label">{hasVideo?'Talking intro':'Portrait mode'}</span>
        {hasVideo && <button className={'sound-button '+(sound?'on':'')} onClick={toggleSound} aria-label={sound?'Mute introduction':'Play introduction with sound'}>{sound?'Ⅱ':'▶'}</button>}
      </div>
    </div>
    <a className="scroll-cue" href="#about">Scroll <span>↓</span></a>
  </section>;
}