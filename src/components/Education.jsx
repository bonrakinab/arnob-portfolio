const Education = () => (
  <section id="education" className="portfolio-section mb-24">
    <div className="section-heading">
      <p className="section-eyebrow">Academic background</p>
      <h2>Education &amp; Leadership</h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <article className="education-card">
        <div className="education-card-top">
          <span className="education-number">01</span>
          <span className="status-badge">Thesis defended</span>
        </div>
        <h3>University of Windsor</h3>
        <p className="education-degree">Master of Science, Computer Science</p>
        <p className="education-detail">Artificial Intelligence specialization · September 2024 — August 2026</p>
        <p>
          Thesis: <strong>Augmented Color Input in CIR Requirements</strong>. Defended August 17, 2026 and accepted
          for University of Windsor/ProQuest ETD publication; university release is pending.
        </p>
      </article>

      <article className="education-card">
        <div className="education-card-top">
          <span className="education-number">02</span>
          <span className="status-badge muted">B.Tech</span>
        </div>
        <h3>Vellore Institute of Technology</h3>
        <p className="education-degree">Bachelor of Technology, Computer Science &amp; Engineering</p>
        <p className="education-detail">July 2019 — July 2023 · CGPA: 8.20/10</p>
        <p>Built a foundation in algorithms, databases, software engineering, machine learning and computer systems.</p>
      </article>
    </div>

    <div className="leadership-strip">
      <div>
        <span className="leadership-icon"><i className="fa-solid fa-users" aria-hidden="true"></i></span>
        <div>
          <h3>Graduate Assistant</h3>
          <p>Three completed appointments supporting University of Windsor computer-science courses.</p>
        </div>
      </div>
      <div>
        <span className="leadership-icon"><i className="fa-solid fa-landmark" aria-hidden="true"></i></span>
        <div>
          <h3>Appointment Committee Member</h3>
          <p>Student representative contributing to tenure-track and sessional hiring processes.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
