import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

//  Mini Componente que Renderiza una etiqueta <source> para las imagenes responsivas.
const Source = props => {
  return <source media={props.info.media} srcSet={props.info.img} />;
};

//  COMPONENTE PRINCIPAL
//  Devuelve una imagen por pantalla, es parte del componente Slider.
//  props
//  imagen
//      img: <img>
//      source: [
//          img: <img>,
//          media: "media-query"
//      ]

const SliderImage = props => {
  //  En caso de que props.imagen.source sea undefined===
  let source = [];
  if (props.imagen.source != null) {
    source = props.imagen.source;
  }
  // ====================================================

  return (
    <div className="Slider-image">
      <CSSTransitionGroup
        transitionName={props.animacion}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <picture key={props.imagen.img}>
          {source.map((item, index) => {
            return <Source info={item} key={"id" + index} />;
          })}

          <img
            key={props.imagen.img}
            className="Slider-image-background"
            src={props.imagen.img}
            draggable="false"
            alt="Banner"
          />
        </picture>
      </CSSTransitionGroup>
      <div className="Slider-image-content">{props.children}</div>
    </div>
  );
};

export default SliderImage;
