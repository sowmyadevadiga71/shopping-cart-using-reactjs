import React, { useContext } from "react";
import "./Item.css";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="itemContainer">
      <img src={props.img} className="itemImg" />
      <div className="itemDetails">
        {" "}
        <div className="productName">{props.name}</div>
        <div className="item-prices">
          {/* <div className="item-price-new">{props.new_price}</div> */}

          <div className="item-price-old">
            <span className="rupee">&#8377;</span>
            {props.new_price}
          </div>
          <div className="item-price-old">
            <i className="fa-solid fa-star starImg"></i>({props.ratings})
          </div>
        </div>
        <button
          type="button"
          className="addCartBtn"
          onClick={() => addToCart(props.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
