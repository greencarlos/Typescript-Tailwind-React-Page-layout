import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Inventory from "./pages/Inventory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
