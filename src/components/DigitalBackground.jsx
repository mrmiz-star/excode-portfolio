import React, { useEffect, useRef } from 'react';

export default function DigitalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle, restrained glow follow
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 3 Large, Soft Atmospheric Aurora Blobs
    const blobs = [
      {
        x: width * 0.25,
        y: height * 0.3,
        radius: Math.max(width, height) * 0.38,
        colorStart: 'rgba(0, 240, 255, 0.06)',
        colorEnd: 'rgba(0, 240, 255, 0)',
        vx: 0.15,
        vy: 0.1,
        angle: 0,
      },
      {
        x: width * 0.75,
        y: height * 0.6,
        radius: Math.max(width, height) * 0.42,
        colorStart: 'rgba(59, 130, 246, 0.05)',
        colorEnd: 'rgba(59, 130, 246, 0)',
        vx: -0.12,
        vy: 0.14,
        angle: Math.PI / 3,
      },
      {
        x: width * 0.5,
        y: height * 0.8,
        radius: Math.max(width, height) * 0.35,
        colorStart: 'rgba(139, 92, 246, 0.04)',
        colorEnd: 'rgba(139, 92, 246, 0)',
        vx: 0.1,
        vy: -0.12,
        angle: Math.PI / 1.5,
      },
    ];

    // Very faint, delicate floating ambient particles
    const particleCount = Math.min(Math.floor(width / 35), 25);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.5,
        alpha: Math.random() * 0.25 + 0.1,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }

    const render = () => {
      // Smooth mouse spring interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Dark solid base (#04060A)
      ctx.fillStyle = '#04060A';
      ctx.fillRect(0, 0, width, height);

      // Render 3 Fluid Moving Aurora Light Blobs
      blobs.forEach((b) => {
        b.angle += 0.002;
        const driftX = Math.sin(b.angle) * 35;
        const driftY = Math.cos(b.angle) * 35;

        const blobGlow = ctx.createRadialGradient(
          b.x + driftX,
          b.y + driftY,
          0,
          b.x + driftX,
          b.y + driftY,
          b.radius
        );
        blobGlow.addColorStop(0, b.colorStart);
        blobGlow.addColorStop(1, b.colorEnd);

        ctx.fillStyle = blobGlow;
        ctx.fillRect(0, 0, width, height);
      });

      // Soft Mouse Cursor Follow Light Halo
      const mouseGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.3
      );
      mouseGlow.addColorStop(0, 'rgba(0, 240, 255, 0.035)');
      mouseGlow.addColorStop(0.5, 'rgba(59, 130, 246, 0.015)');
      mouseGlow.addColorStop(1, 'rgba(4, 6, 10, 0)');

      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      // Render faint particles
      ctx.fillStyle = '#00F0FF';
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
