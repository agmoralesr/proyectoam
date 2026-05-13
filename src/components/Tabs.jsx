import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(Object.keys(tabs)[0]);

  return (
    <div>
      {/* HEADER DE TABS */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          borderBottom: "1px solid var(--border)",
          marginBottom: "20px",
        }}
      >
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              padding: "10px 16px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontWeight: active === key ? "600" : "400",
              borderBottom:
                active === key ? "2px solid var(--accent)" : "2px solid transparent",
              color: "var(--text)",
            }}
          >
            {key}
          </button>
        ))}
      </div>

      {/* CONTENIDO DEL TAB ACTIVO */}
      <div>{tabs[active]}</div>
    </div>
  );
}
