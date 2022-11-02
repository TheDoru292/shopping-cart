import { useParams } from "react-router-dom";
import { getItem } from "../db/items";
import StarRatings from "react-star-ratings";

function Product({ cart, cb, editCart, removeFromCart }) {
  let params = useParams();
  let item = getItem(params.id);

  function checkIfInCart() {
    if (cart.filter((e) => e.id === item[0].id).length > 0) {
      let index = cart.findIndex((e) => e.id === item[0].id);
      return (
        <div>
          <div className="quantity">
            <button
              onClick={() => handleClick(cart[index].quantity - 1)}
              disabled={cart[index].quantity === 1 ? true : false}
            >
              -
            </button>
            <input
              type="number"
              value={cart[index].quantity}
              onChange={handleChange}
              min="1"
            />
            <button onClick={() => handleClick(cart[index].quantity + 1)}>
              +
            </button>
          </div>
          <button onClick={() => removeFromCart(item[0].id)}>
            Remove from cart
          </button>
        </div>
      );
    } else {
      return (
        <button onClick={() => cb({ id: item[0].id, quantity: 1 })}>
          Add to cart
        </button>
      );
    }
  }

  function handleChange(e) {
    editCart({ id: item[0].id, quantity: e.target.value });
  }

  function handleClick(num) {
    editCart({ id: item[0].id, quantity: num });
  }

  return (
    <div className="sc-content">
      <div className="product-item">
        <div className="product-img">
          <img src={item[0].url} alt={item[0].name} />
        </div>
        <div className="product-data">
          <h1>{item[0].name}</h1>
          <div className="product-item-rating">
            <p>Sold {item[0].sold}</p>
            <StarRatings
              rating={item[0].rating}
              starDimension="15px"
              starSpacing="2px"
              starRatedColor="#f5c131"
            />
            <p>{item[0].rating}</p>
            <p>({Math.floor(Math.random() * 100)} Ratings)</p>
          </div>
          <h3>${item[0].price}</h3>
          <hr></hr>
          <p>
            <h3>Category(s): </h3>
            {item[0].category}
          </p>
          <p>
            <h3>Description:</h3>
            {item[0].description}
          </p>
        </div>
        <div className="product-buy">
          <h1>Buy Product</h1>
          <hr />
          {checkIfInCart()}
        </div>
      </div>
    </div>
  );
}

export default Product;
