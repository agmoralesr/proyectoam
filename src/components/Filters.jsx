// src/components/Filters.jsx
export default function Filters({ setFilters }) {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      change24h: "",
      price: "",
    });
  };

  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      {/* CAMBIO 24H */}
      <select name="change24h" onChange={handleChange} style={selectStyle}>
        <option value="">24h</option>
        <option value="positive">Subiendo</option>
        <option value="negative">Bajando</option>
      </select>

      {/* PRECIO */}
      <select name="price" onChange={handleChange} style={selectStyle}>
        <option value="">Precio</option>
        <option value="low">Menos de $1</option>
        <option value="mid">Entre $1 y $1000</option>
        <option value="high">Más de $1000</option>
      </select>

      {/* QUITAR FILTROS */}
      <button
        onClick={clearFilters}
        style={{
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--card-bg)",
          color: "var(--text)",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Quitar filtros ✖
      </button>
    </div>
  );
}

const selectStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid var(--border)",
  background: "var(--card-bg)",
  color: "var(--text)",
  cursor: "pointer",
};
