import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CryptoList from "./components/CryptoList";
import CryptoDetail from "./components/CryptoDetail";
import Favorites from "./pages/Favorites";


function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
        <Route path="/favoritos" element={<Favorites />} />

      </Routes>
    </div>
  );
}

export default App;
