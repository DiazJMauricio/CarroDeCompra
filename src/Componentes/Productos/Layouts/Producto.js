import React from "react";
import "./Producto.css";

const Producto = props => {
  let oferta = <div className="oferta">{props.info.oferta}%</div>;
  let precioOriginal = <p className="precioOriginal">{props.info.valor} $</p>;
  return (
    <div className="producto">
      {props.info.oferta != null ? oferta : null}

      <div className="productoImg">
        <img src={props.info.imagen} alt={props.info.nombre} />
      </div>
      <div className="productoInfo">
        <h4 className="productoNombre">{props.info.nombre}</h4>
        <label title="Añadir al Carro">
          <div className="Precios">
            <p className="productoPrecio">
              {props.info.oferta != null
                ? props.info.valor - props.info.valor * props.info.oferta * 0.01
                : props.info.valor}
              $
            </p>
            {props.info.oferta != null ? precioOriginal : null}
          </div>
          <button
            className="btnAdd"
            onClick={() => props.AgregarAlCarro(props.info)}
          >
            <i className="fas fa-cart-plus" />
          </button>
        </label>
      </div>
    </div>
  );
};

export default Producto;
