import { motion } from "framer-motion";

const skillGroups = Object.freeze([
  {
    category: "Core Networking",
    skills: [
      "TCP/IP & OSI Model",
      "IP Addressing & Subnetting",
      "ARP, ICMP, Ping",
      "Network Troubleshooting",
    ],
  },
  {
    category: "Routing & Switching",
    skills: [
      "Static & Default Routing",
      "OSPF (Single & Multi-Area)",
      "VLAN Configuration",
      "Spanning Tree Protocol (STP)",
    ],
  },
  {
    category: "Network Security Fundamentals",
    skills: [
      "Access Control Lists (ACLs)",
      "Firewall Concepts",
      "Traffic Monitoring",
      "Basic Threat Analysis",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["GNS3", "Cisco Packet Tracer", "Wireshark", "Cisco IOS"],
  },
  {
    category: "Operating Systems",
    skills: [
      "Linux Basics",
      "Networking Services (SSH, DHCP)",
      "Command-Line Operations",
    ],
  },
]);

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "1px",          // 🔑 PREVENTS MARGIN COLLAPSE
        paddingBottom: "80px",
      }}
    >
      {/* BLUE DIVIDER — NOW TRULY FLUSH */}
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
          scrollMarginTop: "120px",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          padding: "65px 40px 0",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#cbd5f5",
            marginBottom: "56px",
            maxWidth: "820px",
            marginInline: "auto",
            lineHeight: 1.7,
          }}
        >
          Core networking and infrastructure skills developed through structured
          learning, hands-on labs, and real-world troubleshooting practice.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "18px",
                padding: "28px",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", marginBottom: "16px" }}>
                {group.category}
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "#cbd5f5",
                  fontSize: "0.95rem",
                }}
              >
                {group.skills.map(skill => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
