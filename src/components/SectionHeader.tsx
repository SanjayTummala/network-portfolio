import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  center?: boolean;
};

export default function SectionHeader({ label, title, center }: Props) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: "56px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.35em",
          color: "#64748b",
          marginBottom: "12px",
        }}
      >
        {label.toUpperCase()}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: "clamp(1.9rem, 3vw, 2.2rem)",
          fontWeight: 700,
          marginBottom: "14px",
        }}
      >
        {title}
      </motion.h2>

      <div
        style={{
          width: center ? "64px" : "48px",
          height: "3px",
          background: "#3b82f6",
          borderRadius: "999px",
          margin: center ? "0 auto" : "0",
        }}
      />
    </div>
  );
}
