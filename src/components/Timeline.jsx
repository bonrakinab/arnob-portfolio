import { TIMELINE } from '../data';

export default function Timeline(){
  return <section id="timeline" className="section timeline-section">
    <div className="section-tag rv"><span>04</span> — Experience + education</div>
    <div className="heading-row rv"><h2>One path.<br/><em>Different systems.</em></h2><p>From enterprise platforms to applied AI research and product engineering.</p></div>
    <div className="timeline">
      {TIMELINE.map((item,i)=><article className="timeline-item rv" style={{'--i':i%4}} key={item.period+item.title}>
        <div className="timeline-dot"/><p className="timeline-period">{item.period}</p>
        <div className="timeline-card"><span>{item.type}</span><h3>{item.title}</h3><b>{item.place}</b><p>{item.detail}</p></div>
      </article>)}
      <div className="next-card rv"><span>Next</span><strong>Your team?</strong></div>
    </div>
  </section>;
}