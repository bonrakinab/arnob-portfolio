import React from 'react';

const Volunteer = () => {
  const activities = [
    {
      role: "Head Of Finance",
      org: "Digit Squad VIT",
      time: "Jan 2022 - Jan 2023",
      details: "Managed club budgets, sponsorships, and Tally reports for VIT."
    },
    {
      role: "General Secretary / Adviser",
      org: "Arohon Foundation",
      time: "Dec 2020 - Dec 2022",
      details: "Promoted nature conservation, advised COVID-era minority outreach."
    },
    {
      role: "Teaching Assistant",
      org: "S.F.X. Greenherald Int’l School",
      time: "Jan 2018 - Dec 2018",
      details: "Provided hands-on chemistry training and graded papers for Class XI."
    },
    {
      role: "Volunteer",
      org: "Aobhan",
      time: "Sep 2017 - Oct 2017",
      details: "Distributed food, clothes, and helped with community painting events."
    }
  ];

  return (
    <section id="volunteer" className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Volunteer Experience</h2>
      <div className="space-y-4">
        {activities.map((act, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold">{act.role}</h3>
            <p className="text-sm text-gray-500">{act.org} | {act.time}</p>
            <p className="mt-1">{act.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Volunteer;
