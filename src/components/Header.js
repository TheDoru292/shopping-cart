import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="sc-header">
      <Link to="/">
        <h1>Waination</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <Link to="/cart">
        <img src="./assets/cart.svg" alt="cart" />
        <p>{props.items}</p>
      </Link>
    </div>
  );
};

export default Header;
