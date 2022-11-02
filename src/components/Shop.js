import { useState } from "react";
import getItems from "../db/items";
import Item from "./Item";

function Shop() {
  const [items, setItems] = useState(getItems());

  return (
    <div className="sc-content shop">
      <div className="sidebar">
        <div className="item-count">
          <h2>Showing {items.length} items</h2>
        </div>
        <div className="sidebar-content">
          <p>
            <h3>Categories</h3>
            <p>Computer</p>
            <p>Figurines</p>
            <p>Pillows</p>
          </p>
          <p>
            <label htmlFor="sort-by">Sort By</label>
            <select name="sort" id="sort-by">
              <option value="price-up">Price: High to Low</option>
              <option value="price-down">Price: Low to High</option>
              <option value="rating">Highest Rating</option>
              <option value="sold">Amount Sold</option>
            </select>
          </p>
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
