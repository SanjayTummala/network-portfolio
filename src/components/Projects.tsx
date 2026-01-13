import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = Object.freeze([
  {
    title: "Packet Analysis & Network Troubleshooting",
    description:
      "Analyzed ICMP, ARP, and ping traffic to understand packet flow, diagnose connectivity issues, and troubleshoot real-world network problems.",
    tech: ["ICMP", "ARP", "Ping", "Wireshark"],
    details: [
      "Captured and analyzed packets using Wireshark",
      "Diagnosed latency and connectivity failures",
      "Mapped packet flow across network layers",
    ],
  },
  {
    title: "DHCP Implementation & Address Management",
    description:
      "Implemented DHCP services to automate IP address allocation in enterprise-style networks.",
    tech: ["DHCP", "IP Addressing", "GNS3", "Packet Tracer"],
    details: [
      "Configured DHCP scopes and lease times",
      "Tested IP exhaustion and renewal behavior",
      "Simulated failure and recovery scenarios",
    ],
  },
  {
    title: "Static & Default Routing in Enterprise Networks",
    description:
      "Designed and implemented static and default routing to ensure reliable traffic flow.",
    tech: ["Static Routing", "Default Routing", "Cisco IOS"],
    details: [
      "Configured routing tables manually",
      "Verified path selection and failover",
      "Validated gateway redundancy",
    ],
  },
  {
    title: "OSPF Dynamic Routing (Real-Time Project)",
    description:
      "Configured OSPF routing across multiple network segments to simulate real-time enterprise routing.",
    tech: ["OSPF", "Dynamic Routing", "GNS3"],
    details: [
      "Established OSPF neighbor relationships",
      "Analyzed convergence and cost metrics",
      "Tested topology changes and recovery",
    ],
  },
  {
    title: "VLAN & Spanning Tree Techniques",
    description:
      "Implemented VLAN segmentation and Spanning Tree Protocol to prevent switching loops.",
    tech: ["VLAN", "STP", "Layer 2 Switching"],
    details: [
      "Configured VLANs across switches",
      "Validated STP root bridge election",
      "Prevented switching loops",
    ],
  },
]);

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: "65px 40px",
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
        Projects
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
        }}
      >
        Practical networking projects focused on configuration, protocols,
        and troubleshooting.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
          gap: "32px",
        }}
      >
        {projects.map((project, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "18px",
                padding: "30px",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "12px" }}>
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#cbd5f5",
                }}
              >
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.75rem",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "#020617",
                      border: "1px solid #1e293b",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* TOGGLE */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  marginTop: "18px",
                  background: "none",
                  border: "none",
                  color: "#38bdf8",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {isOpen ? "Hide Details ↑" : "View Details →"}
              </button>

              {/* DETAILS */}
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginTop: "16px",
                      paddingLeft: "18px",
                      color: "#cbd5f5",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.details.map(detail => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
