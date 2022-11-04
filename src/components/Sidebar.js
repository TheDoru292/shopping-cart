import { Link } from "react-router-dom";

function Sidebar({ cb, selected, items }) {
  return (
    <div className="sidebar">
      <div className="item-count">
        <h2>Showing {items} items</h2>
      </div>
      <div className="sidebar-content">
        <div>
          <h3>Categories</h3>
          <Link to="/shop/computer">
            <p>Computer</p>
          </Link>
          <Link to="/shop/figurines">
            <p>Figurines</p>
          </Link>
          <Link to="/shop/pillows">
            <p>Pillows</p>
          </Link>
        </div>
        <div className="sort">
          <label htmlFor="sort-by">Sort By</label>
          <select value={selected} onChange={cb} name="sort" id="sort-by">
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
  );
}

export default Sidebar;
