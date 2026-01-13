import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "60px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* SECTION DIVIDER */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "120px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #3b82f6, transparent)",
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2rem",
          marginBottom: "32px",
        }}
      >
        About Me
      </motion.h2>

      {/* CONTENT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: "18px",
          padding: "36px",
          display: "flex",
          flexDirection: "column",
          gap: "0px",
        }}
      >
        {/* INTRO PARAGRAPH */}
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#e5e7eb",
          }}
        >
          I am a networking-focused engineer in the early stages of my career,
          building a strong foundation in enterprise networking and
          infrastructure fundamentals. My interest lies in understanding how
          networks behave in real-world conditions, how traffic flows, how
          failures occur, and how issues are systematically identified and
          resolved.
        </p>

        {/* SUPPORTING PARAGRAPHS */}
        <p
          style={{
            fontSize: "1.00rem",
            lineHeight: 1.75,
            color: "#e5e7eb",
          }}
        >
          My learning approach is intentionally hands-on and lab-driven. I build
          structured homelab-style environments using tools such as GNS3, Cisco
          Packet Tracer, and Wireshark to validate core concepts including IP
          addressing, DHCP, routing protocols, and switching behavior. I
          routinely test misconfigurations and failure scenarios to strengthen
          my troubleshooting skills rather than focusing only on ideal
          outcomes.
        </p>
        
        <p
          style={{
            fontSize: "1.00rem",
            lineHeight: 1.75,
            color: "#e5e7eb",
          }}
        >
          My long-term goal is to grow into a security-focused networking role.
          Before specializing further, I am deliberately investing time in
          mastering networking fundamentals, as I believe a deep understanding
          of infrastructure is essential for building and securing reliable
          systems. I value clarity, technical reasoning, and continuous
          improvement through practical experimentation.
        </p>
      </motion.div>
    </section>
  );
}
