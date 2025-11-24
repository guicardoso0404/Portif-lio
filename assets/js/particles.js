// Particle Animation System
class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    
    // Adjust particle count based on screen size
    const isMobile = window.innerWidth <= 768;
    this.particleCount = isMobile ? 25 : 50;
    this.mouse = { x: null, y: null, radius: isMobile ? 100 : 150 };
    
    this.init();
  }
  
  init() {
    this.resizeCanvas();
    this.createParticles();
    this.animate();
    
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      // Recreate particles on resize for better responsiveness
      this.createParticles();
    });
    
    // Support both mouse and touch events
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const touch = e.touches[0];
      this.mouse.x = touch.clientX - rect.left;
      this.mouse.y = touch.clientY - rect.top;
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
    
    this.canvas.addEventListener('touchend', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }
  
  resizeCanvas() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
  
  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        originalX: 0,
        originalY: 0
      });
      
      this.particles[i].originalX = this.particles[i].x;
      this.particles[i].originalY = this.particles[i].y;
    }
  }
  
  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      
      // Draw particle
      this.ctx.fillStyle = 'rgba(0, 123, 255, 0.5)';
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Connect particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.ctx.strokeStyle = `rgba(0, 123, 255, ${1 - distance / 120})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }
  }
  
  updateParticles() {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      
      // Mouse interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.mouse.radius) {
          const force = (this.mouse.radius - distance) / this.mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          
          p.x -= directionX * force * 3;
          p.y -= directionY * force * 3;
        }
      }
      
      // Return to original position
      const dx = p.originalX - p.x;
      const dy = p.originalY - p.y;
      p.x += dx * 0.05;
      p.y += dy * 0.05;
      
      // Movement
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Boundary check
      if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;
    }
  }
  
  animate() {
    this.drawParticles();
    this.updateParticles();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on load
export function initParticles() {
  try {
    // Enable particles on all screen sizes
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
      new ParticleSystem('particles-canvas');
    }
  } catch (error) {
    console.log('Particles disabled');
  }
}
