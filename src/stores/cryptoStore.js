import { atom } from "nanostores";

export const cryptoList = atom([]);
export const loading = atom(true);
export const errorState = atom(null);

export async function loadCoins() {
  loading.set(true);

  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );
  const data = await res.json();

  cryptoList.set(data);
  loading.set(false);
}

// Ejecutar automáticamente al cargar el store
loadCoins();