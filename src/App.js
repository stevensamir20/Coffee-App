import { Routes, Route } from "react-router-dom";
import { CartRoute, LoginRoute } from "./routes/PrivateRoutes";

import { Home } from "./pages/home/Home";
import { Menu } from "./pages/menu/Menu";
import { Cart } from "./pages/cart/Cart";
import { NotFound } from "./pages/not-found/NotFound";
import { Product } from "./pages/product/Product";
import { Navbar } from "./components/header/Navbar";
import { LoginPage } from "./pages/login/LoginPage";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="" element={<Home />} exact/>
        <Route path="/home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:drinkId" element={<Product />} />
        <Route element={<CartRoute />}>
          <Route path="cart" element={<Cart />} /> 
        </Route>
        <Route element={<LoginRoute />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;