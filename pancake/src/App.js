import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import SwapPage from "./Components/Pages/SwapPage";
import LimitPage from "./Components/Pages/LimitPage";
import LiquidityPage from "./Components/Pages/LiquidityPage"
function App() {
  return (
    <div>
      <nav>{/* //Navbar */}</nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/swap" element={<SwapPage/>}/>
        <Route path="/limit" element={<LimitPage/>}/>
        <Route path="/liquidity" element={<LiquidityPage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
