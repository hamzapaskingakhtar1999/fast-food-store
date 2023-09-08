import "./App.css";

/* React Router DOM */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import { useState } from "react";
import { SearchContext } from "./context/SearchContext";

import uuid from "react-uuid";
import { CartContext } from "./context/CartContext";
import Cart from "./pages/cart/Cart";

function App() {
  const [category, setCategory] = useState("");

  /* CART */
  const initialCart = [{ id: uuid(), totalitems: 0, name: "Car", price: 20 }];

  const [cart, setCart] = useState(initialCart);
  return (
    <Router>
      <Navbar />
      <CartContext.Provider value={{ cart, setCart }}>
        <SearchContext.Provider value={{ category, setCategory }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </SearchContext.Provider>
      </CartContext.Provider>

      <Footer />
    </Router>
  );
}

export default App;
