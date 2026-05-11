import { useState } from "react";
import { useStore } from "@nanostores/react";
import { cryptoList, loading, errorState } from "../stores/cryptoStore";
import CryptoItem from "./CryptoItem";
import SearchBar from "./SearchBar";

export default function CryptoList() {
  const coins = useStore(cryptoList);
  const isLoading = useStore(loading);
  const error = useStore(errorState);

  const [filtered, setFiltered] = useState([]);

  const listToShow = filtered.length > 0 ? filtered : coins;

  if (isLoading)
    return (
      <div className="card">
        <div className="skeleton" style={{ height: "20px", marginBottom: "12px" }}></div>
        <div className="skeleton" style={{ height: "20px", marginBottom: "12px" }}></div>
        <div className="skeleton" style={{ height: "20px", marginBottom: "12px" }}></div>
      </div>
    );

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
            <th>  </th>
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
