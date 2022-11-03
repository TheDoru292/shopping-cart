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
  const [cart, setCart] = useState([]);

  function setInCart(obj) {
    let array = cart.concat(obj);
    setCart(array);
    console.log(cart);
  }

  function editCart(gotObj) {
    setCart((current) =>
      current.map((obj) => {
        if (obj.id === gotObj.id) {
          return { ...obj, quantity: gotObj.quantity };
        }

        return obj;
      })
    );
  }

  return (
    <div className="App">
      <Header cart={cart} />

      <Routes>
        <Route path="/shopping-cart/" element={<Home />} />
        <Route path="/shopping-cart/about" element={<About />} />
        <Route path="/shopping-cart/shop" element={<Shop />} />
        <Route path="/shopping-cart/shop/:category" element={<Shop />} />
        <Route
          path="/shopping-cart/product/:id"
          element={<Product cart={cart} cb={setInCart} editCart={editCart} />}
        ></Route>
        <Route path="/shopping-cart/cart" element={<Cart />}></Route>
        <Route path="/shopping-cart/*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
