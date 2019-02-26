import React from "react";
import "./Productos.css";

const ProductosLayout = props => {
  let className = props.ShopCarVisible ? "on" : "";
  return (
    <div className="Productos">
      <div className="showCarbtn desktop">
        <button onClick={props.showCar}>
          <div className={"showCarbtnAnim " + className}>
            <i className="fas fa-shopping-cart" />
            <i class="fas fa-times" />
          </div>
        </button>
      </div>
      <div className="ProductosContent">{props.children}</div>
    </div>
  );
};

export default ProductosLayout;
