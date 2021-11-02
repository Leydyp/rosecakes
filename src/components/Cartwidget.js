import React from "react";
import cartIcon from "../assets/cart.png";

function Cartwidget() {
  return (
    <a href="#">
      <img className="cartIcon" src={cartIcon} alt="cart" />
    </a>
  );
}
export default Cartwidget;
