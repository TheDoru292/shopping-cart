import { useState } from "react";
import getItems from "../db/items";
import { getRandomItems, sortByRatingUp } from "../modules/filter";
import Item from "./Item";

function Home(props) {
  const [items, setItems] = useState(getItems());

  return (
    <div className="sc-content">
      <h2>Our Top Items</h2>
      <hr></hr>
      <div className="items-container">
        {sortByRatingUp(items, 5).map((item) => {
          return (
            <Item
              itemName={item.name}
              itemId={item.id}
              itemPrice={item.price}
              itemRating={item.rating}
              itemUrl={item.url}
            />
          );
        })}
      </div>
      <div className="might-container">
        <h2>You might like</h2>
        <hr></hr>
        <div className="items-container">
          {getRandomItems(items, 5).map((item) => {
            return (
              <Item
                itemName={item.name}
                itemId={item.id}
                itemPrice={item.price}
                itemRating={item.rating}
                itemUrl={item.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
