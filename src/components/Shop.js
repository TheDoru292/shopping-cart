import { useEffect, useState } from "react";
import getItems from "../db/items";
import {
  sortByPriceDown,
  sortByPriceUp,
  sortByRatingUp,
  sortBySoldUp,
} from "../modules/filter";
import Item from "./Item";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState(getItems());
  const [selected, setSelected] = useState("featured");

  useEffect(() => {
    if (selected === "price-up") {
      setItems(sortByPriceUp(getItems(), items.length));
    } else if (selected === "price-down") {
      setItems(sortByPriceDown(getItems(), items.length));
    } else if (selected === "rating") {
      setItems(sortByRatingUp(getItems(), items.length));
    } else if (selected === "sold") {
      setItems(sortBySoldUp(getItems(), items.length));
    }
  }, [selected, items.length]);

  function handleChange(e) {
    setSelected(e.target.value);
    console.log("hi");
  }

  return (
    <div className="sc-content shop">
      <div className="sidebar">
        <div className="item-count">
          <h2>Showing {items.length} items</h2>
        </div>
        <div className="sidebar-content">
          <div>
            <h3>Categories</h3>
            <Link to="/shopping-cart/shop/computer">
              <p>Computer</p>
            </Link>
            <Link to="/shopping-cart/shop/figurines">
              <p>Figurines</p>
            </Link>
            <Link to="/shopping-cart/shop/pillows">
              <p>Pillows</p>
            </Link>
          </div>
          <div className="sort">
            <label htmlFor="sort-by">Sort By</label>
            <select
              value={selected}
              onChange={handleChange}
              name="sort"
              id="sort-by"
            >
              <option value="featured">Featured</option>
              <option value="price-down">Price: Low to High</option>
              <option value="price-up">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
              <option value="sold">Amount Sold</option>
            </select>
          </div>
          <div className="sort"></div>
        </div>
      </div>
      <div className="item-container">
        {items.map((item) => {
          return (
            <Item
              itemId={item.id}
              itemName={item.name}
              itemPrice={item.price}
              itemRating={item.rating}
              itemUrl={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
