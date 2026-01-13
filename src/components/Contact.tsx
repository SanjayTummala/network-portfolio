import { motion } from "framer-motion";

const glow =
  "0 0 22px rgba(59,130,246,0.45), 0 0 48px rgba(59,130,246,0.25)";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "140px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* BLUE DIVIDER — UNCHANGED */}
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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.2rem",
          marginBottom: "18px",
        }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "620px",
          margin: "0 auto 56px",
          lineHeight: 1.75,
          color: "#cbd5f5",
          fontSize: "1rem",
        }}
      >
        I’m actively seeking entry-level networking roles, internships, and
        opportunities to grow in infrastructure and security-focused
        environments. If my work aligns with your needs, I’d be glad to connect.
      </motion.p>

      {/* BIG BOX — UNCHANGED */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: "linear-gradient(180deg, #0f172a, #020617)",
          border: "1px solid #1e293b",
          borderRadius: "24px",
          padding: "clamp(28px, 5vw, 42px) clamp(20px, 5vw, 32px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(18px, 4vw, 26px)",
        }}
      >
        {/* ROW 1 — EMAIL + LINKEDIN */}
        <div
          style={{
            display: "flex",
            gap: "clamp(12px, 4vw, 18px)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* EMAIL */}
          <a
            href="mailto:sanjaykumartummala@gmail.com"
            style={{
              padding: "clamp(12px, 3.5vw, 14px) clamp(22px, 6vw, 30px)",
              borderRadius: "999px",
              background: "#3b82f6",
              color: "#020617",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "box-shadow 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = glow;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* MAIL ICON */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Me
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/sanjaykumarcs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "clamp(12px, 3.5vw, 14px) clamp(22px, 6vw, 30px)",
              borderRadius: "999px",
              border: "1.5px solid #3b82f6",
              color: "#e5e7eb",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "box-shadow 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = glow;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* LINKEDIN ICON */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h4v12H3zM9 8.98h3.8v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.74 2.63 4.74 6.05v6.26h-4v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* ROW 2 — DOWNLOAD RESUME */}
        <a
          href="YOUR_RESUME_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "clamp(12px, 3.5vw, 14px) clamp(26px, 7vw, 34px)",
            borderRadius: "999px",
            background: "#020617",
            border: "1.5px solid #3b82f6",
            color: "#e5e7eb",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.95rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "box-shadow 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = glow;
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {/* DOWNLOAD ICON */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
