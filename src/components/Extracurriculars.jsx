import React from 'react';

const Extracurriculars = () => {
  const activities = [
    {
      title: "Student Representative (Appointment Committee Member)",
      company: "University of Windsor, Windsor, ON, Canada",
      period: "September 2024 - Present (10 months)",
      duties: ["Responsible for hiring tenure-track and sessional teaching positions."],
      position: "left"
    },
    {
      title: "Graduate Assistant",
      company: "University of Windsor, Windsor, ON, Canada",
      period: "May 2025 - Present (2 months)",
      duties: ["Graduate Assistant for the course COMP 3300 - Operating System Fundamentals."],
      position: "right"
    },
    {
      title: "Graduate Assistant",
      company: "University of Windsor, Windsor, ON, Canada",
      period: "January 2025 - May 2025 (5 months)",
      duties: ["Graduate Assistant for the course 4800-1."],
      position: "left"
    },
    {
      title: "Head of Finance",
      company: "Digit SQUAD VIT Vellore (Vellore, Tamil Nadu, India)",
      period: "January 2022 - December 2022 (1 year)",
      duties: [
        "Administered club's finances.",
        "Supervised sponsorships and ensured proper procedure and documentation were followed while obtaining sponsorships.",
        "Arrangements were made with their predecessor for the transfer of club funds and cooperated in preparing the club's budget for approval at the initial meetings.",
        "Made a realistic budget and ensured that expenses did not exceed income.",
        "Made a report on the financial status of each meeting, cooperated with the chairman, and ensured that the budget was adhered to.",
        "Maintained accurate records of income and expenses and was accountable for all club finances.",
        "Responsible for the creation and submission of the financial report at each general meeting.",
        "Assisted with the arrangements of technical meetings and programs.",
        "Attended all club functions actively and became an active member of all committees.",
        "In coordination with the Faculty Coordinate, kept track of the Finance or the amount available in the VIT Tally account under the club's name."
      ],
      position: "right"
    },
    {
      title: "General Secretary and Senior Adviser",
      company: "Arohon Foundation (Dhaka, Bangladesh)",
      period: "January 2019 - December 2022 (4 years)",
      duties: [
        "Involved with a non-profit organization aiming for a cleaner environment and to mitigate the adversities faced by minorities, especially during COVID times.",
        "Served as the General Secretary and currently working as the Senior Advisor for the organization."
      ],
      position: "left"
    },
    {
      title: "Teaching Assistant",
      company: "St. Francis Xavier's Greenherald International School (Dhaka, Bangladesh)",
      period: "January 2018 - December 2018 (1 year)",
      duties: ["Assisted in teaching."],
      position: "right"
    },
    {
      title: "Volunteer",
      company: "Aobhan (Dhaka, Bangladesh)",
      period: "September 2017 - October 2017 (2 months)",
      duties: ["Volunteered for the organization."],
      position: "left"
    },
    {
      title: "Active General Member",
      company: "St. Francis Xavier's Greenherald International School (Dhaka, Bangladesh)",
      period: "January 2016 - July 2017 (1 year 7 months)",
      duties: ["Active general member of the school community."],
      position: "right"
    }
  ];

  return (
    <section id="extracurriculars" className="mb-20">
      <h2 className="text-3xl font-bold mb-16 text-center text-white">Extracurriculars</h2>
      <div className="timeline-container">
        {activities.map((activity, idx) => (
          <div key={idx} className={`timeline-item ${activity.position}`}>
            <div className="timeline-content">
              <p className="text-sm text-blue-400 mb-2">{activity.period}</p>
              <h3 className="text-xl font-bold text-white mb-1">{activity.title}</h3>
              <p className="text-md text-gray-400 mb-3">{activity.company}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {activity.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;
