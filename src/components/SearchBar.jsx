import { Slot } from "@radix-ui/react-slot";
import { useState } from "react";

export default function SearchBar({ coins, setFiltered }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim() === "") {
      // Si el input está vacío, mostrar TODAS las monedas
      setFiltered([]);
      return;
    }

    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value)
    );

    setFiltered(filteredCoins);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto 20px auto",
      }}
    >
      <Slot
        style={{
          position: "absolute",
          left: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      >
        🔍
      </Slot>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar criptomoneda..."
        style={{
          width: "100%",
          padding: "12px 16px 12px 42px",
          borderRadius: "12px",
          border: "1px solid var(--border)",
          background: "var(--card-bg)",
          color: "var(--text)",
          fontSize: "15px",
          outline: "none",
          transition: "0.2s",
        }}
        onFocus={(e) => (e.target.style.border = "1px solid var(--accent)")}
        onBlur={(e) => (e.target.style.border = "1px solid var(--border)")}
      />
    </div>
  );
}
