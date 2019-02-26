import React, { Component, PureComponent } from "react";
import "./Toast.css";

class Toast extends PureComponent {
  state = {
    visible: { opacity: 0 }
  };

  componentWillReceiveProps() {
    if (this.props.mensaje !== "") {
      this.setState({ visible: { opacity: 1 } });
      setTimeout(() => {
        this.setState({ visible: { opacity: 0 } });
      }, 2000);
    }
  }

  render() {
    let mensaje = this.props.mensaje;
    // console.log(mensaje);
    return (
      <div className="stiky" style={{ zIndex: 200 }}>
        <div className="ToastContainer">
          <div className={"Toast "} style={this.state.visible}>
            {mensaje !== "" ? mensaje : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Toast;
