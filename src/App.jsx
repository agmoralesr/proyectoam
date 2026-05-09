import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import CryptoDetail from "./components/CryptoDetail";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
