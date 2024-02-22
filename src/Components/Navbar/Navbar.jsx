import React, { useContext } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems, setSearchText } = useContext(ShopContext);

  return (
    <div className="navBarContainer">
      <div className="heading">Shopping Cart</div>
      <div className="searchBar">
        <input
          type="text"
          className="search"
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link className="linkNames" to="/cart">
          {" "}
          <div className="imgContainer">
            {" "}
            <i className="fa-solid fa-cart-shopping cartImg"></i>
            <div className="cartCount">{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
