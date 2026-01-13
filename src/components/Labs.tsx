import { motion } from "framer-motion";

const labs = Object.freeze([
  {
    title: "DHCP Fundamentals & IP Address Assignment",
    description:
      "Explored DHCP-based IP address allocation in a homelab-style environment. Observed the complete DORA process and validated client connectivity.",
    tools: ["DHCP", "IP Addressing", "GNS3"],
  },
  {
    title: "Routing Fundamentals with OSPF",
    description:
      "Configured OSPF routing between routers to study neighbor formation, route advertisement, and convergence behavior.",
    tools: ["OSPF", "Routing", "GNS3"],
  },
  {
    title: "Branch-Style Network Simulation",
    description:
      "Built a small enterprise-style network with DHCP-enabled clients and routed infrastructure. Tested end-to-end connectivity.",
    tools: ["DHCP", "Routing", "Cisco IOS"],
  },
  {
    title: "Packet Analysis & Troubleshooting Practice",
    description:
      "Captured and analyzed ICMP, ARP, and DHCP traffic using Wireshark to understand protocol behavior and diagnose issues.",
    tools: ["Wireshark", "ICMP", "ARP"],
  },
  {
    title: "Device & Topology Exploration",
    description:
      "Explored routers, switches, interfaces, and LAN connectivity using network simulators to understand device roles.",
    tools: ["Cisco Packet Tracer", "Routers", "Switches"],
  },
]);

const platforms = Object.freeze([
  { name: "GNS3", desc: "Network simulation & lab building" },
  { name: "Cisco Packet Tracer", desc: "Device & topology simulation" },
  { name: "Wireshark", desc: "Packet capture & protocol analysis" },
  { name: "Linux", desc: "Command-line & networking basics" },
  { name: "Cisco IOS", desc: "Router & switch configuration" },
]);

export default function Labs() {
  return (
    <section
      id="labs"
      style={{
        padding: "75px 40px",
        maxWidth: "1200px",
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
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        Labs & Homelab Practice
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          color: "#cbd5f5",
          marginBottom: "60px",
          maxWidth: "820px",
          marginInline: "auto",
          lineHeight: 1.7,
        }}
      >
        Hands-on lab environments built to understand how networks behave under
        real-world conditions, including configuration, failure, and recovery.
      </motion.p>

      {/* LAB CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          marginBottom: "80px",
        }}
      >
        {labs.map((lab, index) => (
          <motion.div
            key={lab.title}
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
            <h3 style={{ fontSize: "1.05rem", marginBottom: "12px" }}>
              {lab.title}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "#cbd5f5",
                marginBottom: "16px",
              }}
            >
              {lab.description}
            </p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {lab.tools.map(tool => (
                <span
                  key={tool}
                  style={{
                    fontSize: "0.75rem",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "#020617",
                    border: "1px solid #1e293b",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* PLATFORMS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: "center" }}
      >
        <h3 style={{ fontSize: "1.4rem", marginBottom: "36px" }}>
          Platforms & Tools
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
          }}
        >
          {platforms.map(platform => (
            <div
              key={platform.name}
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "16px",
                padding: "22px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {platform.name}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#94a3b8",
                  lineHeight: 1.5,
                }}
              >
                {platform.desc}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
