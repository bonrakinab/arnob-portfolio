const roles = [
  {
    period: '2025 — 2026',
    title: 'Graduate Assistant',
    company: 'University of Windsor · Windsor, Ontario',
    bullets: [
      'Completed three graduate-assistant appointments, including COMP 3300 Operating System Fundamentals.',
      'Supported course delivery, student learning and assessment across computer-science subjects.'
    ]
  },
  {
    period: 'September 2023 — June 2024',
    title: 'Enterprise Solutions & Services Specialist Engineer, IT',
    company: 'Banglalink · Dhaka, Bangladesh',
    bullets: [
      'Redesigned Oracle Fusion ERP VAT, WHT and WHV mappings, reducing roughly 15,000 tax conditions to 460 and simplifying PO/invoice maintenance.',
      'Administered EDMS permissions and supported server maintenance, backup, encryption, access logging and segregation-of-duties controls.',
      'Prepared change-management reports, risk and asset registers, incident records and ISO 27001 audit documentation.'
    ]
  },
  {
    period: 'June 2023 — September 2023',
    title: 'Information Technology Intern',
    company: 'Banglalink · Dhaka, Bangladesh',
    bullets: [
      'Built and integrated an IT-support chatbot to improve issue intake and response workflows.',
      'Supported Oracle ERP documentation, EDMS configuration and technical troubleshooting.'
    ]
  },
  {
    period: 'December 2022 — March 2023',
    title: 'Software Development Intern — Team Leader',
    company: 'GAOTek Inc. · Remote',
    bullets: [
      'Developed and maintained an Angular-based RFID product website.',
      'Coordinated the Version 4 RFID team, onboarding contributors and tracking defects through delivery.'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="portfolio-section mb-24">
    <div className="section-heading">
      <p className="section-eyebrow">Professional foundation</p>
      <h2>Experience</h2>
      <p>Enterprise systems, technical support, software delivery and university teaching experience.</p>
    </div>

    <div className="experience-list">
      {roles.map((role) => (
        <article key={role.title + role.period} className="experience-card">
          <div className="experience-meta">
            <p>{role.period}</p>
            <span></span>
          </div>
          <div>
            <h3>{role.title}</h3>
            <p className="experience-company">{role.company}</p>
            <ul>
              {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
