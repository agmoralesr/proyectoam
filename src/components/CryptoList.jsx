import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { cryptoList, loadingState, errorState } from "../stores/cryptoStore";
import CryptoItem from "./CryptoItem";
import SearchBar from "./SearchBar";

/*componentes*/

export default function CryptoList() {
  const coins = useStore(cryptoList);
  const loading = useStore(loadingState);
  const error = useStore(errorState);

  const [filtered, setFiltered] = useState([]);

  // Si hay búsqueda, mostramos los filtrados; si no, la lista completa
  const listToShow = filtered.length > 0 ? filtered : coins;

  useEffect(() => {
    // Si ya tenemos datos en el store, no volvemos a cargar
    if (coins.length > 0) return;

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then(res => res.json())
      .then(data => {
        cryptoList.set(data);
        loadingState.set(false);
      })
      .catch(() => {
        errorState.set("Error al cargar datos");
        loadingState.set(false);
      });
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="card">
      <SearchBar setFiltered={setFiltered} />

      <table className="table">
        <thead>
          <tr>
            <th>Cripto</th>
            <th>Precio</th>
            <th>Cambio 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>

        <tbody>
          {listToShow.map((coin) => (
            <CryptoItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
