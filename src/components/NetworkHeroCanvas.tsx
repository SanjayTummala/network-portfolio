import { useEffect, useRef } from "react";

export default function NetworkHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const NODE_COUNT = 70;
    const MAX_DIST = 220;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
    };

    const nodes: Node[] = [];

    // Bias nodes toward the RIGHT side
    for (let i = 0; i < NODE_COUNT; i++) {
      const bias = 0.45 + Math.random() * 0.55;
      nodes.push({
        x: w * bias,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      });
    }

    const packets = Array.from({ length: 60 }).map(() => ({
      from: Math.floor(Math.random() * NODE_COUNT),
      to: Math.floor(Math.random() * NODE_COUNT),
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
    }));

    let rafId = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const fadeFactor = (x: number) => {
      const start = w * 0.35;
      if (x <= start) return 0;
      return Math.min(1, (x - start) / (w - start));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < w * 0.4 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // Draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const midX = (a.x + b.x) / 2;
            const alpha = (1 - dist / MAX_DIST) * fadeFactor(midX);

            if (alpha > 0.05) {
              ctx.strokeStyle = `rgba(56,189,248,${alpha * 0.35})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw packets (curved paths)
      for (const p of packets) {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.from = Math.floor(Math.random() * NODE_COUNT);
          p.to = Math.floor(Math.random() * NODE_COUNT);
        }

        const a = nodes[p.from];
        const b = nodes[p.to];

        const cx = (a.x + b.x) / 2;
        const cy = (a.y + b.y) / 2 - 40;

        const t = p.t;
        const x =
          (1 - t) * (1 - t) * a.x +
          2 * (1 - t) * t * cx +
          t * t * b.x;
        const y =
          (1 - t) * (1 - t) * a.y +
          2 * (1 - t) * t * cy +
          t * t * b.y;

        const alpha = fadeFactor(x);
        if (alpha < 0.1) continue;

        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
