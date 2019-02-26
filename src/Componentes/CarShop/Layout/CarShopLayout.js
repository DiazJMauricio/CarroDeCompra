import React from "react";
import "./CarShop.css";

export const Item = props => {
  return (
    <div className="Item" title={props.info.nombre}>
      {props.info.cant > 1 ? (
        <div className="ItemCant">{props.info.cant}</div>
      ) : null}

      <div className="containerNombre">
        <h4>{props.info.nombre}</h4>
      </div>
      <h4>${props.info.precio * props.info.cant}</h4>
      <button className="delItem" onClick={() => props.delItem(props.info)}>
        <i className="fas fa-minus" />
      </button>
    </div>
  );
};

const CarShopLayout = props => {
  return (
    <div className={props.show}>
      <div className="CarTitle">
        <h4>Carrito</h4>
      </div>
      <div className="items scrollBar">{props.children}</div>
      <div className="carShopFooter">
        <div className="carTotal">
          <h4>Total</h4>
          <h4>${props.total}</h4>
        </div>
        <button className="btnBuy">Comprar</button>
      </div>
    </div>
  );
};

export default CarShopLayout;
