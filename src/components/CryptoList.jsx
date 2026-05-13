// src/components/CryptoList.jsx
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { cryptoList, loading, errorState } from "../stores/cryptoStore";
import { favorites, toggleFavorite } from "../stores/favoritesStore";
import CryptoItem from "./CryptoItem";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

export default function CryptoList() {
  const coins = useStore(cryptoList);
  const isLoading = useStore(loading);
  const error = useStore(errorState);
  const favs = useStore(favorites);

  const [filters, setFilters] = useState({
    change24h: "",
    price: "",
    favorites: "",
  });

  const [filtered, setFiltered] = useState([]);

  // Si hay búsqueda, usamos los resultados filtrados
  const listToShow = filtered.length > 0 ? filtered : coins;

  // ⭐ APLICAR FILTROS AQUÍ (ANTES DEL MAP)
  let filteredCoins = listToShow;

  // FILTRO CAMBIO 24H
  if (filters.change24h === "positive") {
    filteredCoins = filteredCoins.filter(
      (c) => c.price_change_percentage_24h > 0,
    );
  }
  if (filters.change24h === "negative") {
    filteredCoins = filteredCoins.filter(
      (c) => c.price_change_percentage_24h < 0,
    );
  }

  // FILTRO PRECIO
  if (filters.price === "low") {
    filteredCoins = filteredCoins.filter((c) => c.current_price < 1);
  }
  if (filters.price === "mid") {
    filteredCoins = filteredCoins.filter(
      (c) => c.current_price >= 1 && c.current_price <= 1000,
    );
  }
  if (filters.price === "high") {
    filteredCoins = filteredCoins.filter((c) => c.current_price > 1000);
  }

  // LOADING
  if (isLoading)
    return (
      <div className="card">
        <div
          className="skeleton"
          style={{ height: "20px", marginBottom: "12px" }}
        ></div>
        <div
          className="skeleton"
          style={{ height: "20px", marginBottom: "12px" }}
        ></div>
        <div
          className="skeleton"
          style={{ height: "20px", marginBottom: "12px" }}
        ></div>
      </div>
    );

  if (error) return <p>{error}</p>;

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          gap: "20px",
          flexWrap: "nowrap", // ❗ evita que los filtros bajen
        }}
      >
        {/* SEARCHBAR A LA IZQUIERDA */}
        <div style={{ flexGrow: 1 }}>
          <SearchBar coins={coins} setFiltered={setFiltered} />
        </div>

        {/* FILTROS A LA DERECHA */}
        <div style={{ flexShrink: 0 }}>
          <Filters setFilters={setFilters} />
        </div>
      </div>


      {/* TABLA */}
      <table className="table">
        <thead>
          <tr>
            <th>Cripto</th>
            <th>Precio</th>
            <th>Cambio 24h</th>
            <th>Market Cap</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {filteredCoins.map((coin) => (
            <CryptoItem
              key={coin.id}
              coin={coin}
              isFavorite={favs.includes(coin.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
