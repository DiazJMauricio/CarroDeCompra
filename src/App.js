import React, { Component } from "react";
import "./App.css";
import Footer from "./Componentes/Footer/Footer";
import Toast from "./Componentes/Toast/Toast";
import ComerceSetting from "./Componentes/ComerceSetting/ComerceSetting";

class App extends Component {
  state = {
    Toast: ""
  };
  changeToast = Toast => {
    this.setState({ Toast });
  };

  render() {
    return (
      <div className="App">
        <Toast mensaje={this.state.Toast} />
        <ComerceSetting changeToast={this.changeToast} />
        <Footer />
      </div>
    );
  }
}

export default App;
