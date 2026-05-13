import { useNavigate } from "react-router-dom";

export default function FavoriteItem({ coin, toggleFavorite }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/coin/${coin.id}`)}
      style={{
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        background: "var(--card-bg)",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={coin.image}
        alt={coin.name}
        width="48"
        height="48"
        style={{ borderRadius: "50%" }}
      />

      <h4 style={{ margin: 0 }}>{coin.name}</h4>

      <p style={{ margin: 0, opacity: 0.8 }}>
        ${coin.current_price.toLocaleString()}
      </p>

      {/* Botón para quitar de favoritos */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // cod que evita abrir la página al quitar favorito
          toggleFavorite(coin.id);
        }}
        style={{
          marginTop: "8px",
          padding: "6px 12px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--card-bg)",
          color: "var(--text)",
          cursor: "pointer",
        }}
      >
        ★ Quitar
      </button>
    </div>
  );
}
