import { Link } from "react-router-dom";

function Cart({ cart, editCart, removeFromCart }) {
  function handleChange(id, quantity) {
    editCart({ id: id, quantity: quantity });
  }

  return (
    <div className="sc-content">
      {cart.length === 0 ? (
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>
            To add items in your cart go{" "}
            <Link to="/shopping-cart/shop">here</Link>.
          </p>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <h2>Cart</h2>
            {cart.map((item) => {
              return (
                <div className="cart-item">
                  <img src={item.url} alt={item.name} />
                  <div className="cart-item-name">
                    <Link to={`/product/${item.id}`}>
                      <p>{item.name}</p>
                    </Link>
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={item.quantity}
                    onChange={(event) =>
                      handleChange(item.id, event.target.value)
                    }
                  />
                  <div className="cart-item-last">
                    <p>${item.price * item.quantity}</p>
                    <p onClick={() => removeFromCart(item.id)}>Remove</p>
                  </div>
                </div>
              );
            })}
            <div className="total-price">
              <p>
                <span>Items:</span> $
                {cart.reduce(
                  (prevValue, currentValue) =>
                    prevValue + currentValue.quantity * currentValue.price,
                  0
                )}
              </p>
              <p>
                <span>Shipping:</span> $0
              </p>
              <p>
                <span>Total:</span> $
                {cart.reduce(
                  (prevValue, currentValue) =>
                    prevValue + currentValue.quantity * currentValue.price,
                  0
                )}
              </p>
            </div>
          </div>
          <div className="cart-price">
            <h2>Your order</h2>
            <div>
              <p>
                Items: $
                {cart.reduce(
                  (prevValue, currentValue) =>
                    prevValue + currentValue.quantity * currentValue.price,
                  0
                )}
              </p>
              <p>Shipping: $0</p>
            </div>
            <hr />
            <h2>
              Total: ${""}
              {cart.reduce(
                (prevValue, currentValue) =>
                  prevValue + currentValue.quantity * currentValue.price,
                0
              )}
            </h2>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
