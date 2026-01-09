import React from 'react';

const Certifications = () => {
  const certs = [
    { 
      name: "Oracle Cloud Data Management 2023 Certified Foundations Associate", 
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=76CB958EB6FFED02723CC1F73F3B6E939E478540E7CED2F1CA5EB5033B6C0D81",
      provider: "Oracle",
      icon: "fas fa-cloud"
    },
    { 
      name: "IT Security: Defense against the digital dark arts", 
      link: "https://www.coursera.org/account/accomplishments/certificate/YVRWCKR55XD3",
      provider: "Coursera",
      icon: "fas fa-shield-alt"
    },
    { 
      name: "Oracle Cloud Infrastructure 2023 Certified Data Science Professional", 
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=CEF2C31B5B6954508DA07FA226229F9EEC0045BDC85273A003BA8BF873E083D2",
      provider: "Oracle",
      icon: "fas fa-brain"
    },
    { 
      name: "Google IT Support", 
      link: "https://www.credly.com/badges/21253fb7-e08b-42d5-8157-0bcc325bc71c",
      provider: "Google",
      icon: "fas fa-headset"
    },
    { 
      name: "Oracle Cloud Infrastructure 2023 Foundations Associate", 
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=682F8AA7D152591265961BE85C29EB2A9C0FB9B73F49D1F57626536BF89CFDC6",
      provider: "Oracle",
      icon: "fas fa-cube"
    },
    { 
      name: "AWS Cloud Foundations", 
      link: "https://www.credly.com/badges/dafaa625-6501-4356-8768-ea1512a28e67",
      provider: "AWS",
      icon: "fas fa-server"
    },
    { 
      name: "Machine Learning for All", 
      link: "https://www.coursera.org/account/accomplishments/certificate/UTRVM8GNG6QK",
      provider: "Coursera",
      icon: "fas fa-robot"
    }
  ];

  return (
    <section id="certifications" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Licenses & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <div key={index} className="card p-6 relative">
            <h3 className="text-lg font-bold mb-3 text-white pr-12">{cert.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{cert.provider}</p>
            <a 
              className="cert-link" 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`View ${cert.provider} certificate`}
              title={`View ${cert.provider} certificate`}
            >
              <i className={cert.icon}></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
