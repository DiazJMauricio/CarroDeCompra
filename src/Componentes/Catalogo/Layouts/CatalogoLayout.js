import React from "react";
import "./Catalogo.css";
// import Filtros from "./Filtros";

const CatalogoLayout = props => {
  return (
    <div className="Catalogo">
      {/* <Filtros /> */}
      {props.children}
    </div>
  );
};

export default CatalogoLayout;
