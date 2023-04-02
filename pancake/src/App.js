import { Route, Routes } from "react-router-dom";
import OrangeSection from "./Components/OrangeSection/OrangeSection";
import HomePage from "./Components/Pages/HomePage";

function App() {
  return (
    <div>
      <nav>{/* //Navbar */}</nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <OrangeSection/>
    </div>
  );
}

export default App;
