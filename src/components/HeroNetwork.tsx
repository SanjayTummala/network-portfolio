import { motion } from "framer-motion";

export default function HeroNetwork() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* SOFT GRADIENT PULSE */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(56,189,248,0.12), transparent 60%)",
        }}
      />

      {/* DATA FLOW LINES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: ["-30%", "130%"] }}
          transition={{
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${20 + i * 10}%`,
            width: "40%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(148,163,184,0.35), transparent)",
            opacity: 0.35,
          }}
        />
      ))}
    </div>
  );
}
