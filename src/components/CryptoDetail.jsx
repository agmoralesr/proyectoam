import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PriceChart from "./PriceChart";

export default function CryptoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => res.json())
      .then(data => setCoin(data));

    fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
      .then(res => res.json())
      .then(data => setHistory(data.prices));
  }, [id]);

  if (!coin) return <p>Cargando detalles...</p>;

  return (
    <div className="card" style={{ padding: "32px" }}>
      
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--card-bg)",
          color: "var(--text)",
          cursor: "pointer"
        }}
      >
        ← Volver
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px"
        }}
      >
        {/* COLUMNA IZQUIERDA */}
        <div>
          <img src={coin.image.large} width="100" alt={coin.name} />

          <h2 style={{ marginTop: "16px" }}>{coin.name}</h2>

          <p style={{ opacity: 0.7 }}>
            {coin.description.en?.slice(0, 250)}...
          </p>
        </div>

        {/* COLUMNA DERECHA */}
        <div
          style={{
            background: "var(--bg)",
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid var(--border)"
          }}
        >
          <h3>Información de mercado</h3>

          <p><strong>Precio:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</p>
          <p><strong>Ranking:</strong> #{coin.market_cap_rank}</p>
          <p><strong>Capitalización:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</p>
        </div>
      </div>

      {/* GRÁFICO */}
      <div style={{ marginTop: "40px" }}>
        <h3>Precio últimos 7 días</h3>
        <PriceChart prices={history} />
      </div>
    </div>
  );
}
