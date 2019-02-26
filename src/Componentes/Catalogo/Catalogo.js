import React, { Component } from "react";
import CatalogoLayout from "./Layouts/CatalogoLayout";
import Productos from "../Productos/Productos";

class Catalogo extends Component {
  state = {};
  render() {
    return (
      <CatalogoLayout>
        {this.props.children}

        <Productos
          ShopCarVisible={this.props.ShopCarVisible}
          showCar={this.props.showCar}
          productos={this.props.productos}
          AgregarAlCarro={this.props.AgregarAlCarro}
        />
      </CatalogoLayout>
    );
  }
}

export default Catalogo;
