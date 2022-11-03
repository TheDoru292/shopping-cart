import { useState, useEffect, useCallback } from "react";
import getItems from "../db/items";
import Item from "./Item";
import Sidebar from "./Sidebar";
import {
  filterByCategory,
  sortByPriceDown,
  sortByPriceUp,
  sortByRatingUp,
  sortBySoldUp,
} from "../modules/filter";
import { useParams } from "react-router-dom";

function Shop() {
  const param = useParams();
  const [runOnce, setRunOnce] = useState(false);
  const [oldCategory, setOldCategory] = useState("");
  const [items, setItems] = useState(getItems());
  const [selected, setSelected] = useState("featured");

  if (runOnce === false) {
    setOldCategory(param.category);
    setRunOnce(true);
  }

  function handleChange(e) {
    setSelected(e.target.value);
  }

  const sort = useCallback(() => {
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

  useEffect(() => {
    console.log();
    if (selected) {
      sort();
    }
    if (param.category && runOnce === false) {
      setItems(filterByCategory(getItems(), param.category, items.length));
      setRunOnce(true);
    }
    if (runOnce === true && param.category !== oldCategory) {
      setItems(filterByCategory(getItems(), param.category, items.length));
      setOldCategory(param.category);
    }
  }, [
    selected,
    items,
    sort,
    param.category,
    items.length,
    oldCategory,
    runOnce,
  ]);

  return (
    <div className="sc-content shop">
      <Sidebar cb={handleChange} selected={selected} items={items.length} />
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
