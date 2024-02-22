import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";

const CartItems = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    removeItemFromCart,
    removeAll,
  } = useContext(ShopContext);

  return (
    <div className="cartContainer">
      <div className="cartDiv">
        <div className="cartHead">
          <div className="shoppingCartHead">Shopping Cart</div>
          <div className="removeAll" onClick={() => removeAll()}>
            Remove All
          </div>
        </div>
      </div>
      {getTotalCartItems() > 0 ? (
        <>
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div className="cartBody" key={e.id}>
                  {" "}
                  <img className="cartItemImg" src={e.image} alt="hii" />
                  <div className="cartQtyDetails">
                    <div className="prodName">{e.name}</div>
                    <div className="prodPrice">
                      <span className="rupee">&#8377;</span>
                      {e.new_price}
                    </div>
                    <div className="productQty"> Qty : {cartItems[e.id]}</div>
                  </div>
                  <div className="cartQty">
                    <div className="minus" onClick={() => removeFromCart(e.id)}>
                      -
                    </div>
                    <div className="Qty">{cartItems[e.id]}</div>
                    <div
                      className="plus"
                      onClick={() => {
                        addToCart(e.id);
                      }}
                    >
                      +
                    </div>
                  </div>
                  <div className="cartAmount">
                    <div className="amount">
                      <span className="rupee">&#8377;</span>
                      {e.new_price * cartItems[e.id]}
                    </div>
                    <div
                      className="removeAll remove"
                      onClick={() => {
                        removeItemFromCart(e.id);
                      }}
                    >
                      Remove
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div className="cartTotalContainer">
            <div className="subTotalDiv">
              <div className="subTotal">Total</div>
              <div className="subTotalAmount">
                <span className="rupee">&#8377;</span>
                {getTotalCartAmount()}
              </div>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        </>
      ) : (
        <div className="NoRecordsFound"> Cart is empty</div>
      )}
    </div>
  );
};

export default CartItems;
