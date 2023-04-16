import { Route, Routes } from "react-router-dom";
import { contextDarkMode } from "./Components/UI/DarkMode/contextDarkMode";

import HomePage from "./Components/Pages/HomePage";
import SwapPage from "./Components/Pages/SwapPage";
import LimitPage from "./Components/Pages/LimitPage";
import LiquidityPage from "./Components/Pages/LiquidityPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import useCookies from "./Components/UI/DarkMode/useCookies";
import Nft from "./Components/Pages/Nft/Nft";
import NotFound from "./Components/Pages/NotFound";
import ButtonUP from "./Components/ButtonUP/ButtonUP";

function App() {
  const { mode, setMode } = useCookies();

  return (
    <div>
      <contextDarkMode.Provider value={mode}>
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/limit" element={<LimitPage />} />
          <Route path="/liquidity" element={<LiquidityPage />} />
          <Route path="/nfts" element={<Nft />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer mode={mode} setMode={setMode} />
        <ButtonUP />
      </contextDarkMode.Provider>
    </div>
  );
}

export default App;
