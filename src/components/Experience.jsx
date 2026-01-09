import React from 'react';

const Experience = () => {
  const roles = [
    {
      title: "Enterprise Solutions and Services Specialist Engineer, IT",
      company: "Banglalink (Dhaka, Bangladesh)",
      period: "September 2023 - June 2024 (10 months)",
      duties: [
        "Governed financial documentation procedures for both customers and suppliers within the Oracle Fusion ERP system.",
        "Managed the VAT system mechanism on the Oracle ERP Fusion application, including designing unique VAT, WHT, and WHV determination factor codes for efficient mapping, and creating rule codes and mapping them with purchase and product categories.",
        "Identified, addressed, and resolved issues within the JIRA platform, effectively tackling technical challenges.",
        "Held administrative access to manage privileges, roles, and permissions for users and groups within the Electronic Document Management System (EDMS).",
        "Ensured data security and access control, maintaining the integrity of sensitive documents.",
        "Took charge of server maintenance, deploying regular updates and patches to enhance system usability and accessibility.",
        "Successfully planned and prepared monthly, half-yearly, and yearly audits for the ESS team, ensuring compliance and accuracy in financial records.",
        "Created monthly Change Management reports (September and October).",
        "Documented the team's audit materials for ISO 27001 certification, including preparing asset and risk registers for risk assessment, ensuring server and system compliance with a 75% audit score, and preparing incident management reports.",
        "Enforced strict password policies for applications, operating systems, and databases.",
        "Implemented server backup strategies with a disaster mitigation drill calendar.",
        "Ensured data encryption for application security.",
        "Tracked user activity logs to prevent suspicious activity.",
        "Designed Segregation of Duties protocols to prevent errors and fraud."
      ],
      position: "left"
    },
    {
      title: "Information Technology Intern, Advanced Internship Program (AIP)",
      company: "Banglalink (Dhaka, Bangladesh)",
      period: "June 2023 - September 2023 (4 months)",
      duties: [
        "Led creating and deploying an innovative chatbot for the IT support team, which streamlined issue resolution and drastically reduced response times.",
        "Successfully connected the chatbot with existing systems, increasing team efficiency and guaranteeing smooth connection with end users.",
        "Identified and resolved critical IT-related challenges through problem-solving, providing timely solutions, and resolving complex technical issues."
      ],
      position: "right"
    },
    {
      title: "Software Development Intern - Team Leader",
      company: "GAOTek Inc. (Remote)",
      period: "December 2022 - March 2023 (4 months)",
      duties: [
        "Developed the Version 4 RFID website that uses Angular as the main programming language.",
        "Team Leader of the Version 4-RFID team."
      ],
      position: "left"
    },
    {
      title: "Business Development Intern (Team Leader)",
      company: "GAOTek Inc. (Manhattan, New York City, United States)",
      period: "December 2022 - March 2023 (4 months)",
      duties: ["Team Leader for the BD teams working on California, Washington, and Oregon states."],
      position: "right"
    }
  ];

  return (
    <section id="experience" className="mb-20">
      <h2 className="text-3xl font-bold mb-16 text-center text-white">Where I've Worked</h2>
      <div className="timeline-container">
        {roles.map((role, idx) => (
          <div key={idx} className={`timeline-item ${role.position}`}>
            <div className="timeline-content">
              <p className="text-sm text-blue-400 mb-2">{role.period}</p>
              <h3 className="text-xl font-bold text-white mb-1">{role.title}</h3>
              <p className="text-md text-gray-400 mb-3">{role.company}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {role.duties.map((duty, i) => (
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

export default Experience;
