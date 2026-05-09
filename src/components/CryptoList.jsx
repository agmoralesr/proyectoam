import { useEffect, useState } from "react";
import CryptoItem from "./CryptoItem";


/*Componente que muestra la lista de criptomonedas*/
export default function CryptoList() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Obtener datos de la API de CoinGecko al montar el componente */

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then(res => res.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      });
  }, []);


  /* Mensaje de carga mientras se obtienen los datos */

  if (loading) return <p>Cargando datos...</p>;



  /* Caracteristicas de la tabla de criptomonedas */

  return (
    <div className="card">
      <table className="table">
        <thead>
          <tr>
            <th>Cripto</th>
            <th>Precio </th>
            <th>Cambio 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
    
        <tbody>
          {coins.map(coin => (
            <CryptoItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
