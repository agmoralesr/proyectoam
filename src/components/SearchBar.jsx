import { useStore } from "@nanostores/react";
import { cryptoList } from "../stores/cryptoStore";
import { useState } from "react";

export default function SearchBar({ setFiltered }) {
  const coins = useStore(cryptoList);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value)
    );

    setFiltered(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Buscar criptomoneda..."
      value={query}
      onChange={handleSearch}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        borderRadius: "8px",
        border: "1px solid #D9E1E8",
        fontSize: "16px"
      }}
    />
  );
}
