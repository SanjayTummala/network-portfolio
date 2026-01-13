import { motion } from "framer-motion";

const items = Object.freeze([
  {
    title: "Network Design & Simulation",
    description:
      "Designing and simulating enterprise-style network topologies using tools like GNS3 and Cisco Packet Tracer, focusing on realistic architectures and traffic flow.",
  },
  {
    title: "Routing & Switching",
    description:
      "Implementing static, default, and dynamic routing (OSPF), along with VLAN segmentation and Spanning Tree techniques to ensure scalable and loop-free networks.",
  },
  {
    title: "Network Troubleshooting",
    description:
      "Analyzing ICMP, ARP, and packet-level behavior to diagnose connectivity issues, latency problems, and misconfigurations in network environments.",
  },
  {
    title: "Security Fundamentals",
    description:
      "Applying basic security principles such as ACLs, firewall rules, and traffic monitoring to improve network reliability and threat awareness.",
  },
]);

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      style={{
        padding: "60px 40px",
        maxWidth: "1100px",
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
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        What I Do
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
        }}
      >
        Focused on enterprise networking fundamentals with a strong emphasis on
        hands-on learning and troubleshooting.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            style={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "16px",
              padding: "28px",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "#cbd5f5",
              }}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
