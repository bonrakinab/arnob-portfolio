import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NeuralBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let scene, camera, renderer, particles, lines;
    let mouseX = 0, mouseY = 0;
    let animationFrameId;
    const PARTICLE_COUNT = 30; // Reduced from 60 for better performance

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 150;

    // Renderer - optimized settings
    renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: false, // Disabled for better performance
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduced for performance

    // Particles (Nodes)
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleVelocities = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 500;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 500;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 500;
      
      particleVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2
      ));
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));
    
    particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, transparent: true })
    );
    particles.userData.velocities = particleVelocities;
    scene.add(particles);

    // Lines (Edges) - draw fewer connections for performance
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.06, // Slightly more visible since we have fewer
      depthWrite: false
    });
    lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    const onMouseMove = (event) => {
      mouseX = event.clientX - (window.innerWidth / 2);
      mouseY = event.clientY - (window.innerHeight / 2);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;
      const velocities = particles.userData.velocities;
      const linePositions = [];
      const MAX_DISTANCE = 200; // Only draw lines between nearby particles
      
      // Animate particle positions
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i].x;
        positions[i3+1] += velocities[i].y;
        positions[i3+2] += velocities[i].z;

        // Bounce off the walls
        if (Math.abs(positions[i3]) > 250) velocities[i].x *= -1;
        if (Math.abs(positions[i3+1]) > 250) velocities[i].y *= -1;
        if (Math.abs(positions[i3+2]) > 250) velocities[i].z *= -1;
      }

      // Connect particles only if they're close enough (major performance improvement)
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const i3 = i * 3;
          const j3 = j * 3;
          
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3+1] - positions[j3+1];
          const dz = positions[i3+2] - positions[j3+2];
          const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
          
          if (distance < MAX_DISTANCE) {
            linePositions.push(positions[i3], positions[i3+1], positions[i3+2]);
            linePositions.push(positions[j3], positions[j3+1], positions[j3+2]);
          }
        }
      }

      lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Update camera based on mouse (reduced effect for smoother performance)
      camera.position.x += (mouseX * 0.03 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 0.03 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (particleGeometry) {
        particleGeometry.dispose();
      }
      if (lineGeometry) {
        lineGeometry.dispose();
      }
      if (scene) {
        scene.clear();
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
};
