import React, { useEffect, useRef } from 'react';
import './ModernGradientBackground.css';

const ModernGradientBackground = () => {
  const particlesContainerRef = useRef(null);
  const sphere1Ref = useRef(null);
  const sphere2Ref = useRef(null);
  const sphere3Ref = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesContainerRef.current;
    if (!particlesContainer) return;

    const particleCount = 80;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random size (small)
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Initial position
      resetParticle(particle);

      particlesContainer.appendChild(particle);

      // Animate
      animateParticle(particle);
    }

    function resetParticle(particle) {
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';

      return {
        x: posX,
        y: posY,
      };
    }

    function animateParticle(particle) {
      // Initial position
      const pos = resetParticle(particle);

      // Random animation properties
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      // Animate with timing
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        // Reset after animation completes
        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }

    // Mouse interaction
    const handleMouseMove = (e) => {
      // Create particles at mouse position
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      // Create temporary particle
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Small size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position at mouse
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';

      particlesContainer.appendChild(particle);

      // Animate outward
      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';

        // Remove after animation
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);

      // Subtle movement of gradient spheres
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

      if (sphere1Ref.current) {
        sphere1Ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      if (sphere2Ref.current) {
        sphere2Ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      if (sphere3Ref.current) {
        sphere3Ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-background">
      <div ref={sphere1Ref} className="gradient-sphere sphere-1"></div>
      <div ref={sphere2Ref} className="gradient-sphere sphere-2"></div>
      <div ref={sphere3Ref} className="gradient-sphere sphere-3"></div>
      <div className="glow"></div>
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>
      <div ref={particlesContainerRef} className="particles-container" id="particles-container"></div>
    </div>
  );
};

export default ModernGradientBackground;
