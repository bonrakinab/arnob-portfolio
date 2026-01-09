import { useEffect, useState } from 'react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);
  
  return visible ? (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all hover:-translate-y-1 z-50"
      title="Go to top"
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up text-xl"></i>
    </button>
  ) : null;
};