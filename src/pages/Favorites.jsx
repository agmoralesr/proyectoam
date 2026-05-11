import { useStore } from "@nanostores/react";
import { favorites } from "../stores/favoritesStore";
import { cryptoList, loading } from "../stores/cryptoStore";
import CryptoItem from "../components/CryptoItem";


export default function Favorites() {
  const favs = useStore(favorites);
  const coins = useStore(cryptoList);
  const isLoading = useStore(loading);

if (isLoading) {
  return <p>Cargando favoritos...</p>;
}
  const filtered = coins.filter((c) => favs.includes(c.id));

  return (
    <div className="card">
      <a
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--card-bg)",
          color: "var(--text)",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        ← Volver
      </a>

      <h2>Mis Favoritos</h2>

      {filtered.length === 0 && <p>No tienes favoritos aún.</p>}

      <table className="table">
        <thead>
          <tr>
            <th>Cripto</th>
            <th>Precio</th>
            <th>Cambio 24h</th>
            <th>Market Cap</th>
            <th>Fav</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((coin) => (
            <CryptoItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
