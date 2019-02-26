import React, { Component } from "react";
import ProductosLayout from "./Layouts/ProductosLayout";
import Producto from "./Layouts/Producto";
import CSSTransitionGroup from "react-addons-css-transition-group";

class Productos extends Component {
  render() {
    let productos = Array.from(this.props.productos);
    return (
      <ProductosLayout
        showCar={this.props.showCar}
        ShopCarVisible={this.props.ShopCarVisible}
      >
        {productos.map(p => {
          return (
            <CSSTransitionGroup
              transitionName="itemfade"
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}
            >
              <Producto
                info={p}
                key={p.id}
                AgregarAlCarro={this.props.AgregarAlCarro}
              />
            </CSSTransitionGroup>
          );
        })}
      </ProductosLayout>
    );
  }
}

export default Productos;
