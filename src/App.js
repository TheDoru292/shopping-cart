import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import NotFound from "./components/404";
import About from "./components/About";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./assets/style.css";

function App() {
  const [itemsNumber, setItemsNumber] = useState(0);

  const increment = () => {
    setItemsNumber(itemsNumber + 1);
  };

  return (
    <div className="App">
      <Header items={itemsNumber} />

      <Routes>
        <Route path="/" element={<Home cb={increment} />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/product:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
