import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import MobileCarShop from "../MobileCarShop/MobileCarShop";
import Catalogo from "../Catalogo/Catalogo";
import CarShop from "../CarShop/CarShop";
import Filtros from "../Catalogo/Layouts/Filtros";

import api from "../../api.json";

class ComerceSetting extends Component {
  state = {
    ShopCarVisible: false,
    genero: "all",
    tag: "all",
    productos: "",
    car: [],
    iconShop: ""
  };

  showCar = () => {
    let visible = !this.state.ShopCarVisible;
    let icon = visible ? "on" : "";
    this.setState({ ShopCarVisible: visible, iconShop: icon });
  };

  calcTotal = () => {
    let total = 0;
    this.state.car.map(p => {
      total += p.precio * p.cant;
      return 0;
    });
    this.setState({ total });
  };

  AgregarAlCarro = info => {
    let car = this.state.car;
    let done = false;
    car.map(p => {
      if (p.id === info.id) {
        let cant = p.cant + 1;
        p.cant = cant;
        this.props.changeToast("Se agrego el producto al carro");
        this.setState({ car });
        done = true;
      }
      this.calcTotal();
      return 0;
    });
    if (!done) {
      let nuevoProductoPrecio =
        info.oferta !== undefined
          ? info.valor - info.valor * info.oferta * 0.01
          : info.valor;

      let nuevoProducto = {
        id: info.id,
        nombre: info.nombre,
        precio: nuevoProductoPrecio,
        cant: 1
      };
      car.push(nuevoProducto);
      this.props.changeToast("Se agrego un nuevo producto");
      this.setState({ car });
      this.calcTotal();
    }
  };

  EliminarDelCarro = info => {
    let car = this.state.car;
    let index = car.indexOf(info);
    if (info.cant === 1) {
      car.splice(index, 1);
    } else {
      car[index].cant -= 1;
    }
    this.props.changeToast("Se Elimino un producto del carro");
    this.setState({ car });
    this.calcTotal();
  };

  FiltrarProductos = (genero, tag) => {
    let fList = Array.from(api.Productos);
    fList = fList.sort((a, b) =>
      b.oferta === undefined ? -1 : b.oferta <= a.oferta ? -1 : 0
    );

    if (genero !== "all") {
      fList = this.FiltrarPorGenero(fList, genero);
    }
    if (tag !== "all") {
      fList = this.FiltrarPorTag(fList, tag);
    }
    return fList;
  };

  FiltrarPorTag = (List, T) => {
    let fList = [];
    List.map(p => {
      if (p.tag === T) {
        fList.push(p);
      }
    });
    return fList;
  };

  FiltrarPorGenero = (List, G) => {
    let fList = [];
    List.map(p => {
      if (p.genero === G) {
        fList.push(p);
      }
    });
    return fList;
  };
  selectTag = e => {
    let tag = e.target.value;
    if (tag === this.state.tag) {
      tag = "all";
    }

    let productos = this.FiltrarProductos(this.state.genero, tag);
    this.setState({ tag, productos });
  };

  selectGenero = e => {
    let genero = e.target.value;
    if (genero === this.state.genero) {
      genero = "all";
    }

    let productos = this.FiltrarProductos(genero, this.state.tag);
    this.setState({ genero, productos });
  };
  componentDidMount() {
    let productos = this.FiltrarProductos(this.state.genero, this.state.tag);
    this.setState({ productos });
  }
  render() {
    return (
      <div>
        <NavBar
          total={this.state.total}
          showCar={this.showCar}
          ShopCarVisible={this.state.ShopCarVisible}
          iconShop={this.state.iconShop}
        />
        <Header />
        <MobileCarShop>
          <CarShop
            visible={this.state.ShopCarVisible}
            car={this.state.car}
            delItem={this.EliminarDelCarro}
          />
        </MobileCarShop>
        <div className="ShopSection">
          <Catalogo
            ShopCarVisible={this.state.ShopCarVisible}
            showCar={this.showCar}
            productos={this.state.productos}
            AgregarAlCarro={this.AgregarAlCarro}
          >
            <Filtros
              selectTag={this.selectTag}
              tag={this.state.tag}
              selectGenero={this.selectGenero}
              genero={this.state.genero}
            />
          </Catalogo>
          <div className="desktopCarShop desktop">
            <CarShop
              visible={this.state.ShopCarVisible}
              car={this.state.car}
              delItem={this.EliminarDelCarro}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ComerceSetting;
