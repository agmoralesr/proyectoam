import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CryptoDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => res.json())
      .then(data => setCoin(data));
  }, [id]);

  /* Mensaje de carga mientras se obtiene la info de las criptomonedas */
  if (!coin) return <p>Cargando detalles...</p>;


  /* Detalle de la criptomoneda que se selecciona - info detallada*/
  return (
    <div className="card">
      <h2>{coin.name}</h2>
      <img src={coin.image.small} width="80" />

      <p><strong>Precio actual de la moneda:</strong> ${coin.market_data.current_price.usd.toLocaleString()}</p>
      <p><strong>Ranking:</strong> #{coin.market_cap_rank}</p>
      <p><strong>Capitalización de la Moneda:</strong> ${coin.market_data.market_cap.usd.toLocaleString()}</p>

      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        {coin.description.en?.slice(0, 200)}...
      </p>
    </div>
  );
}

