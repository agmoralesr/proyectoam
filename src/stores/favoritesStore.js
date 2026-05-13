// src/stores/favoritesStore.js
import { atom } from "nanostores";

// Cargar favoritos desde localStorage
const saved = JSON.parse(localStorage.getItem("favorites") || "[]");

export const favorites = atom(saved);

// Función oficial para alternar favoritos
export function toggleFavorite(id) {
  const current = favorites.get();

  const updated = current.includes(id)
    ? current.filter((f) => f !== id)
    : [...current, id];

  favorites.set(updated);
  localStorage.setItem("favorites", JSON.stringify(updated));
}
