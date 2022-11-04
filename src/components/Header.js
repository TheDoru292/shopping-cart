import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    if (cart === undefined) {
      console.log("There are no items in cart!");
    }
    if (cart.length === 1) {
      setCartItems(cart[0].quantity);
    }
    if (cart.length > 1) {
      let newArray = cart;

      setCartItems(
        newArray.reduce((num, obj) => {
          return num + parseInt(obj.quantity);
        }, 0)
      );
    }
  }, [cart]);

  return (
    <div className="sc-header">
      <Link className="sc-header-first" to="/">
        <h1>Waination</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <Link className="sc-header-last" to="/cart">
        <img src="/shopping-cart/assets/cart.svg" alt="cart" />
        <p>{cartItems}</p>
      </Link>
    </div>
  );
};

export default Header;
