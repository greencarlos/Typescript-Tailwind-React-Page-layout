import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Inventory from "./pages/Inventory";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Routes path="/" element={<Homepage />} />
        <Routes path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
