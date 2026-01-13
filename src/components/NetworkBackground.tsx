import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const horizon = height * 0.65;

    // ---------------- CITY SKYLINE ----------------
    const buildings = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * width,
      w: 40 + Math.random() * 120,
      h: 80 + Math.random() * 220,
    }));

    // ---------------- NETWORK NODES ----------------
    const nodes = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: horizon - Math.random() * 180,
      vx: 0.15,
    }));

    const packets = Array.from({ length: 30 }).map(() => ({
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.004,
      from: Math.floor(Math.random() * nodes.length),
      to: Math.floor(Math.random() * nodes.length),
    }));

    let offset = 0;
    let animationId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawCity = () => {
      ctx.save();
      ctx.filter = "blur(6px)";
      ctx.fillStyle = "rgba(15,23,42,0.9)";
      buildings.forEach(b => {
        ctx.fillRect(b.x - offset * 0.3, horizon - b.h, b.w, b.h);
      });
      ctx.restore();
    };

    const drawNetwork = () => {
      // Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            ctx.strokeStyle = "rgba(34,211,238,0.15)";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x - offset, nodes[i].y);
            ctx.lineTo(nodes[j].x - offset, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x - offset, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,211,238,0.8)";
        ctx.fill();
      });

      // Packets
      packets.forEach(p => {
        const a = nodes[p.from];
        const b = nodes[p.to];
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.from = Math.floor(Math.random() * nodes.length);
          p.to = Math.floor(Math.random() * nodes.length);
        }
        const x = a.x + (b.x - a.x) * p.progress - offset;
        const y = a.y + (b.y - a.y) * p.progress;

        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,1)";
        ctx.fill();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      offset += 0.12;
      if (offset > width) offset = 0;

      drawCity();
      drawNetwork();

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -2,   // IMPORTANT: behind gradient
        pointerEvents: "none",
      }}
    />
  );
}
