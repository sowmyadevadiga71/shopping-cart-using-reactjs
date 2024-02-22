import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../../Components/Item/Item";
import "./ShopCategory.css";
import MenuItems from "../../Components/MenuItems/MenuItems";

const ShopCategory = (props) => {
  const { all_product, search } = useContext(ShopContext);

  return (
    <>
      <MenuItems />
      <div className="shopCategory">
        <div className="shopCategoryProducts">
          {all_product
            .filter((ele) => {
              return search.toLowerCase() === ""
                ? ele
                : ele.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item, i) => {
              if (props.category === item.category) {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    img={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                    ratings={item.ratings}
                  />
                );
              } else if (props.category === "all") {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    img={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                    ratings={item.ratings}
                  />
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
