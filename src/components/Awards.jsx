import React, { useState } from 'react';

const Awards = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [openPopup, setOpenPopup] = useState(null);

  const awards = [
    {
      title: "Daily Star Award",
      image: "/assets/daily-star.jpg"
    }
  ];

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const togglePopup = (index) => {
    setOpenPopup(openPopup === index ? null : index);
  };

  const closePopup = () => {
    setOpenPopup(null);
  };

  return (
    <section id="awards" className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Honors & Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <div key={index} className="card p-6 award-card relative">
            <div className="award-thumb-wrapper mb-4">
              {!imageErrors[index] ? (
                <>
                  <img
                    src={award.image}
                    alt={award.title}
                    className="award-thumb"
                    loading="lazy"
                    onClick={() => togglePopup(index)}
                    onError={() => handleImageError(index)}
                  />
                  <div 
                    className={`award-popup ${openPopup === index ? 'active' : ''}`}
                    onClick={closePopup}
                  >
                    <img src={award.image} alt={award.title} loading="lazy" />
                  </div>
                </>
              ) : (
                <div className="award-thumb award-thumb-placeholder">
                  <i className="fa-solid fa-award fa-3x text-cyan-400"></i>
                  <p className="text-xs text-gray-400 mt-2">Image not found</p>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{award.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
