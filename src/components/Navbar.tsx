import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Labs", href: "#labs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(10px)",
        border: "1px solid #1e293b",
        borderRadius: "999px",
        padding: "10px 18px",
        display: "flex",
        gap: "14px",
        maxWidth: "92vw",
      }}
    >
      {links.map(link => {
        const isActive = active === link.href;

        return (
          <a
            key={link.label}
            href={link.href}
            style={{
              position: "relative",
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
              color: isActive ? "#38bdf8" : "#e5e7eb",
              textDecoration: "none",
              fontWeight: isActive ? 600 : 400,
              padding: "6px 8px",
            }}
          >
            {link.label}

            {isActive && (
              <motion.span
                layoutId="active-underline"
                style={{
                  position: "absolute",
                  left: 6,
                  right: 6,
                  bottom: -4,
                  height: "2px",
                  borderRadius: "2px",
                  background: "#38bdf8",
                }}
              />
            )}
          </a>
        );
      })}
    </motion.nav>
  );
}
