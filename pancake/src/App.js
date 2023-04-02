import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <div>
      <nav>{/* //Navbar */}</nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
     
    </div>
  );
}

export default App;
