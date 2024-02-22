import "./App.css";
import MenuItems from "./Components/MenuItems/MenuItems";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopCategory category="all" />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/all" element={<ShopCategory category="all" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route
            path="/watches"
            element={<ShopCategory category="watches" />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
