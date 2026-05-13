import * as Toggle from "@radix-ui/react-toggle";
import { Link } from "react-router-dom";

export default function Header() {
  const toggleDark = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header
      style={{
        padding: "32px 0",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          CryptoTracker
        </Link>
      </h1>
      <p style={{ opacity: 0.7, marginTop: "4px" }}>Datos en tiempo real</p>

      {/* BOTONES AESTHETIC */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          background: "rgba(255,255,255,0.1)",
          padding: "8px",
          borderRadius: "999px",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--border)",
        }}
      >
        {/* MODO OSCURO */}
        <Toggle.Root
          onClick={toggleDark}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            background: "var(--card-bg)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          🌙
        </Toggle.Root>

        {/* FAVORITOS */}
        <Toggle.Root
          onClick={() => (window.location.href = "/favoritos")}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            background: "var(--card-bg)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          ⭐
        </Toggle.Root>
      </div>
    </header>
  );
}
