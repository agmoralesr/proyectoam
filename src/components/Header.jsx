export default function Header() {
  return (
    <header style={{
      padding: "32px 0",
      textAlign: "center"
    }}>

      <h1 style={{ fontSize: "32px", margin: 0 }}>CryptoTracker</h1>
      <p style={{ fontSize: "16px", opacity: 0.7 }}>
        Datos en tiempo real de criptomonedas usando la API de CoinGecko
      </p>
    </header>
  );
}
