import { useStore } from "@nanostores/react";
import { favorites, toggleFavorite } from "../stores/favoritesStore";

export default function CryptoItem({ coin }) {
  const favs = useStore(favorites);
  const isFav = favs.includes(coin.id);

  return (
    <tr>
      {/* Nombre + logo */}
      <td style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={coin.image} alt={coin.name} width="28" />
        <a href={`/coin/${coin.id}`} style={{ textDecoration: "none" }}>
          {coin.name}
        </a>
      </td>

      {/* Precio */}
      <td>${coin.current_price.toLocaleString()}</td>

      {/* Cambio 24h */}
      <td
        className={
          coin.price_change_percentage_24h >= 0 ? "text-green" : "text-red"
        }
      >
      {coin.price_change_percentage_24h
      ? `${coin.price_change_percentage_24h.toFixed(2)}%`
      : "0.00%"}

      </td>

      {/* Market Cap */}
      <td>${coin.market_cap.toLocaleString()}</td>

      {/* ⭐ FAVORITO */}
      <td>
        <span
          onClick={() => toggleFavorite(coin.id)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: isFav ? "#FFD700" : "var(--text)",
            userSelect: "none"
          }}
        >
          ★
        </span>
      </td>
    </tr>
  );
}
