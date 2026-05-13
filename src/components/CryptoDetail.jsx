import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PriceChart from "./PriceChart";
import Tabs from "./Tabs";
import { useStore } from "@nanostores/react";
import { favorites, toggleFavorite } from "../stores/favoritesStore";

export default function CryptoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);
  const favs = useStore(favorites);
  const isFavorite = favs.includes(id);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));

    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
    )
      .then((res) => res.json())
      .then((data) => setHistory(data.prices));
  }, [id]);

  if (!coin) return <p>Cargando detalles...</p>;

  return (
    <div className="card" style={{ padding: "32px" }}>

      {/* boton volver */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--card-bg)",
          color: "var(--text)",
          cursor: "pointer",
        }}
      >
        ← Volver
      </button>

      {/* tabs info */}
      <Tabs
        tabs={{
          Overview: (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* FILA SUPERIOR: logo moneda + info + botón fav*/}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                {/* IZQUIERDA - content */}
                <div
                  style={{ display: "flex", gap: "24px", alignItems: "center" }}
                >
                  <img src={coin.image.large} width="80" alt={coin.name} />

                  <div>
                    <h2>{coin.name}</h2>
                    <h3>
                      ${coin.market_data.current_price.usd.toLocaleString()}
                    </h3>

                    <p
                      style={{
                        color:
                          coin.market_data.price_change_percentage_24h > 0
                            ? "limegreen"
                            : "tomato",
                      }}
                    >
                      {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>
                </div>

                {/* DERECHA: botón fav */}
                <button
                  onClick={() => toggleFavorite(id)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                    background: "var(--card-bg)",
                    color: "var(--text)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "transform 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {isFavorite
                    ? "★ Quitar de favoritos"
                    : "☆ Agregar a favoritos"}
                </button>
              </div>

              {/* ABOUT - descrip de la moneda */}
              <div style={{ opacity: 0.85, lineHeight: "1.6" }}>
                <h3>Sobre {coin.name}</h3>

                <p
                  dangerouslySetInnerHTML={{
                    __html: coin.description.es || coin.description.en,
                  }}
                />
              </div>
            </div>
          ),

          Market: (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              <div className="card" style={cardStyle}>
                <h4>Market Cap</h4>
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              </div>

              <div className="card" style={cardStyle}>
                <h4>Volumen 24h</h4>
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              </div>

              <div className="card" style={cardStyle}>
                <h4>Ranking</h4>
                <p>#{coin.market_cap_rank}</p>
              </div>

              <div className="card" style={cardStyle}>
                <h4>Supply</h4>
                <p>{coin.market_data.circulating_supply.toLocaleString()}</p>
              </div>
            </div>
          ),

          Chart: (
            <div>
              <h3>Precio últimos 7 días</h3>
              <PriceChart prices={history} />
            </div>
          ),

         
        }}
      />
    </div>
  );
}

const cardStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid var(--border)",
  background: "var(--card-bg)",
};
