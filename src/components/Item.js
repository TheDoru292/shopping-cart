import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

function Item({ itemName, itemUrl, itemPrice, itemRating, itemId }) {
  return (
    <div className="top-item">
      <Link className="top-item-link" to={`/shopping-cart/product/${itemId}`}>
        <img src={itemUrl} alt={itemName} />
        <p className="top-item-name">{itemName}</p>
        <div className="top-item-rating">
          <StarRatings
            rating={itemRating}
            starDimension="15px"
            starSpacing="2px"
            starRatedColor="#f5c131"
          />
          <p>({itemRating})</p>
        </div>
        <p>${itemPrice}</p>
      </Link>
    </div>
  );
}

export default Item;
