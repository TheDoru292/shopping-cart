import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  function setInCart(obj) {
    let array = cart.concat(obj);
    setCart(array);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function editCart(gotObj) {
    let array = cart.map((current) => {
      if (current.id === gotObj.id) {
        return { ...current, quantity: gotObj.quantity };
      }

      return current;
    });
    setCart(array);
    localStorage.setItem("cart", JSON.stringify(array));
  }

  function removefromCart(objId) {
    let array = cart.filter((obj) => obj.id !== objId);
    setCart(array);
    localStorage.setItem("cart", JSON.stringify(array));
  }

  return (
    <div className="App">
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route
          path="/product/:id"
          element={
            <Product
              cart={cart}
              cb={setInCart}
              editCart={editCart}
              removeFromCart={removefromCart}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              editCart={editCart}
              removeFromCart={removefromCart}
            />
          }
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
