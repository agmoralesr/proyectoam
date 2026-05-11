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
      <h1 style={{ margin: 0 }}>CryptoTracker</h1>
      <p style={{ opacity: 0.7, marginTop: "4px" }}>Datos en tiempo real</p>

      {/* BOTONES */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {/* Cambiar modo */}
        <button
          onClick={toggleDark}
          style={{
            padding: "10px 22px",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: "var(--card-bg)",
            color: "var(--text)",
            fontSize: "14px",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          🌙 Modo
        </button>

        {/* Favoritos */}
        <a
          href="/favoritos"
          style={{
            padding: "10px 22px",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: "var(--card-bg)",
            color: "var(--text)",
            fontSize: "14px",
            textDecoration: "none",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          ⭐ Favs
        </a>
      </div>
    </header>
  );
}
