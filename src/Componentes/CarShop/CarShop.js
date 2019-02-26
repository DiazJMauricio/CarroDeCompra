import React, { Component } from "react";
import CarShopLayout, { Item } from "./Layout/CarShopLayout";
import CSSTransitionGroup from "react-addons-css-transition-group";

export const CarEmpty = props => {
  return (
    <div className="CarEmpty">
      <p>
        Haga click en el botón <i className="fas fa-cart-plus" /> para agregar
        un producto al carro
      </p>
    </div>
  );
};

class CarShop extends Component {
  state = {};
  calcTotal = () => {
    let total = 0;
    this.props.car.map(p => {
      total += p.precio * p.cant;
      return 0;
    });
    return total;
  };
  render() {
    let className = "CarShop";
    if (this.props.visible) {
      className = "CarShop Active";
    }

    let items = this.props.car.map(p => {
      return <Item info={p} key={p.id} delItem={this.props.delItem} />;
    });

    return (
      <CarShopLayout show={className} total={this.calcTotal()}>
        <CSSTransitionGroup
          transitionName="itemfade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.props.car.length === 0 ? <CarEmpty /> : items}
        </CSSTransitionGroup>
      </CarShopLayout>
    );
  }
}

export default CarShop;
