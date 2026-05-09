




import { Link } from "react-router-dom";

export default function CryptoItem({ coin }) {
  const priceChange = coin.price_change_percentage_24h;


      /* Precio actual de la moneda, cambio porcentual en 24h y capitalización de mercado */

  return (
    <tr>
      <td style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={coin.image} alt={coin.name} width="28" />
        <Link to={`/coin/${coin.id}`} style={{ textDecoration: "none", color: "#1A3C57" }}>
          {coin.name}
        </Link>
      </td>


      <td>${coin.current_price?.toLocaleString()}</td>

      <td className={priceChange >= 0 ? "text-green" : "text-red"}>
        {priceChange !== null && priceChange !== undefined
          ? priceChange.toFixed(2) + "%"
          : "N/A"}
      </td>

      <td>${coin.market_cap?.toLocaleString()}</td>
    </tr>
  );
}
