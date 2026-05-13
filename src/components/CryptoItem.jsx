// src/components/CryptoItem.jsx

// ⭐ ICONOS SVG AESTHETIC
const FilledStar = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD700">
    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"/>
  </svg>
);

const EmptyStar = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2">
    <path d="M12 2l3 7h7l-5.5 5 2 8-6.5-4-6.5 4 2-8L2 9h7z"/>
  </svg>
);

export default function CryptoItem({ coin, isFavorite, toggleFavorite }) {
  return (
    <tr>
      {/* NOMBRE + LINK */}
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={coin.image}
            alt={coin.name}
            width="24"
            height="24"
            style={{ borderRadius: "50%" }}
          />

          <a
            href={`/coin/${coin.id}`}
            style={{ color: "var(--text)", textDecoration: "none" }}
          >
            {coin.name}
          </a>
        </div>
      </td>

      {/* PRECIO */}
      <td>${coin.current_price.toLocaleString()}</td>

      {/* CAMBIO 24H */}
      <td
        style={{
          color:
            coin.price_change_percentage_24h > 0
              ? "limegreen"
              : "tomato",
        }}
      >
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </td>

      {/* MARKET CAP */}
      <td>${coin.market_cap.toLocaleString()}</td>

      {/* ESTRELLA FAVORITO */}
      <td
        onClick={() => toggleFavorite(coin.id)}
        style={{
          cursor: "pointer",
          textAlign: "center",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {isFavorite ? FilledStar : EmptyStar}
      </td>
    </tr>
  );
}
