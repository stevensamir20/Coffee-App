import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about/About";
import { Menu } from "./pages/menu/Menu";
import { Cart } from "./pages/cart/Cart";
import { NotFound } from "./pages/not-found/NotFound";
import { Product } from "./pages/product/Product";
import { Navbar } from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:drinkId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;