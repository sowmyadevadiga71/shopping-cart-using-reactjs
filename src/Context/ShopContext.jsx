import React, { createContext, useState } from "react";
import all_product from "../Components/Assests/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [search, setSearch] = useState("");

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalCartItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItem++;
      }
    }
    return totalCartItem;
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const removeAll = () => {
    setCartItems(getDefaultCart());
  };

  const setSearchText = (search) => {
    setSearch(search);
  };

  const contextValue = {
    all_product,
    cartItems,
    search,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    removeItemFromCart,
    removeAll,
    setSearchText,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
