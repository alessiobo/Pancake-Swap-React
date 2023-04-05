import { Route, Routes } from "react-router-dom";
import { contextDarkMode } from "./Components/UI/DarkMode/contextDarkMode";

import HomePage from "./Components/Pages/HomePage";
import SwapPage from "./Components/Pages/SwapPage";
import LimitPage from "./Components/Pages/LimitPage";
import LiquidityPage from "./Components/Pages/LiquidityPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import useCookies from "./Components/UI/DarkMode/useCookies";
import Checkbox from "./Components/UI/Checkbox/Checkbox";
import Nft from "./Components/Pages/Nft/Nft";

function App() {
  const { mode, setMode } = useCookies();

  return (
    <div>
      {/* //todo: checkbox di prova darkMode  --da eliminare */}
      <Checkbox mode={mode} setMode={setMode} />
      <contextDarkMode.Provider value={mode}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/limit" element={<LimitPage />} />
          <Route path="/liquidity" element={<LiquidityPage />} />
          <Route path="/nfts" element={<Nft />} />
        </Routes>
        <Footer mode={mode} setMode={setMode} />
      </contextDarkMode.Provider>
    </div>
  );
}

export default App;
