import React, { useState } from "react";
import "./MenuItems.css";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const [menu, setMenu] = useState("all");

  return (
    <div className="menuContainer">
      <ul className="navMenu">
        <li
          onClick={() => {
            setMenu("all");
          }}
        >
          <Link className="navLinkNames" to="/all">
            All{" "}
          </Link>{" "}
          {menu === "all" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link className="navLinkNames" to="/men">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link className="navLinkNames" to="/women">
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("watches");
          }}
        >
          <Link className="navLinkNames" to="/watches">
            Watches
          </Link>
          {menu === "watches" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
