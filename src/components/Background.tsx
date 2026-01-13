import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background:
          "radial-gradient(circle at 20% 30%, rgba(56,189,248,0.06), transparent 45%)," +
          "radial-gradient(circle at 80% 70%, rgba(99,102,241,0.06), transparent 45%)," +
          "linear-gradient(to bottom, #020617, #020617)",
      }}
    />
  );
}
