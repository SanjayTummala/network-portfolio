export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#020617",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          filter: "saturate(0.85) brightness(0.92)", // 🔥 reduces strong blue
        }}
      >
        <source src="/networkhero.mp4" type="video/mp4" />
      </video>

      {/* LEFT DOMINANT OVERLAY (UNCHANGED STRUCTURE, TUNED VALUES) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(2,6,23,0.94) 0%, rgba(2,6,23,0.9) 30%, rgba(2,6,23,0.65) 50%, rgba(2,6,23,0.3) 63%, rgba(2,6,23,0) 75%)",
        }}
      />

      {/* TEXT CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingLeft: "8vw",
          maxWidth: "520px",
        }}
      >
        {/* ROLE LABEL — GAP REDUCED FURTHER */}
        <div
          style={{
            color: "#3b82f6",
            fontSize: "0.75rem",
            letterSpacing: "0.26em",
            marginBottom: "6px", // ⬅️ reduced further
          }}
        >
          NETWORK ENGINEER • CYBERSECURITY ENTHUSIAST
        </div>

        {/* NAME */}
        <h1
          style={{
            fontSize: "clamp(3rem, 4.5vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.04,
            marginBottom: "20px",
          }}
        >
          Sanjay Kumar
        </h1>

        {/* DESCRIPTION */}
        <p
          style={{
            color: "#9ca3af",
            fontSize: "1.05rem",
            lineHeight: 1.75,
          }}
        >
          I design, simulate, and secure enterprise-style networks using
          real-world routing, switching, and hands-on lab environments.
        </p>
      </div>
    </section>
  );
}
