import React from "react";
import "./Filtros.css";

const Filtros = props => {
  return (
    <div className="CatalogoFiltros">
      <div className="tags">
        <button
          value="camisa"
          className={props.tag === "camisa" ? "on" : null}
          onClick={props.selectTag}
        >
          Camisas
        </button>
        <button
          value="remera"
          className={props.tag === "remera" ? "on" : null}
          onClick={props.selectTag}
        >
          Remeras
        </button>
        <button
          value="pantalon"
          className={props.tag === "pantalon" ? "on" : null}
          onClick={props.selectTag}
        >
          Pantalones
        </button>
      </div>
      <div className="genero">
        <button
          value="male"
          className={props.genero === "male" ? "on" : null}
          onClick={props.selectGenero}
        >
          <i className="fas fa-mars" />
        </button>
        <button
          value="female"
          className={props.genero === "female" ? "on" : null}
          onClick={props.selectGenero}
        >
          <i className="fas fa-venus" />
        </button>
      </div>
      {/* <div className="buscador">
        <input type="text" placeholder="Buscar" />
        <button>
          <i className="fas fa-search" />
        </button>
      </div> */}
    </div>
  );
};

export default Filtros;
