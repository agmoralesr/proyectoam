import { atom } from "nanostores";

// Cargar favoritos desde localStorage
const saved = JSON.parse(localStorage.getItem("favorites") || "[]");

export const favorites = atom(saved);

// Función para alternar favoritos
export function toggleFavorite(id) {
  const current = favorites.get();

  let updated;
  if (current.includes(id)) {
    updated = current.filter(f => f !== id);
  } else {
    updated = [...current, id];
  }

  favorites.set(updated);
  localStorage.setItem("favorites", JSON.stringify(updated));
}
