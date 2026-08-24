import './ModernGradientBackground.css';

const particles = Array.from({ length: 32 }, (_, index) => ({
  left: ((index * 37) % 101) + '%',
  top: ((index * 53) % 97) + '%',
  size: (1 + (index % 4)) + 'px',
  duration: (14 + (index % 9)) + 's',
  delay: '-' + (index % 12) + 's',
  drift: ((index % 2 === 0 ? 1 : -1) * (18 + (index % 5) * 7)) + 'px'
}));

const ModernGradientBackground = () => (
  <div className="gradient-background" aria-hidden="true">
    <div className="gradient-sphere sphere-1"></div>
    <div className="gradient-sphere sphere-2"></div>
    <div className="gradient-sphere sphere-3"></div>
    <div className="glow"></div>
    <div className="grid-overlay"></div>
    <div className="noise-overlay"></div>
    <div className="particles-container">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
            '--particle-drift': particle.drift
          }}
        />
      ))}
    </div>
  </div>
);

export default ModernGradientBackground;
