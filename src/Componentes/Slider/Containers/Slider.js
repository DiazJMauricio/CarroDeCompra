import React, { Component } from "react";
import SliderLayout from "../Layouts/SliderLayout";
import SliderImage from "../Layouts/SliderImage";

// Archivo de Imagenes default
const imagenes = [
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/014/672/642/large/chun-lo-dog-patreon.jpg?1544971328",
    source: [
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/014/672/642/large/chun-lo-dog-patreon.jpg?1544971328",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/014/672/642/large/chun-lo-dog-patreon.jpg?1544971328",
        media: "(max-width: 650px)"
      }
    ]
  },
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/006/567/784/large/chun-lo-strife.jpg?1499605807",
    source: [
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/006/567/784/large/chun-lo-strife.jpg?1499605807",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/006/567/784/large/chun-lo-strife.jpg?1499605807",
        media: "(max-width: 650px)"
      }
    ]
  },
  {
    img:
      "https://cdna.artstation.com/p/assets/images/images/004/449/910/large/chun-lo-akuma.jpg?1483881228",

    source: [
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/004/449/910/large/chun-lo-akuma.jpg?1483881228",
        media: "(max-width: 450px)"
      },
      {
        img:
          "https://cdna.artstation.com/p/assets/images/images/004/449/910/large/chun-lo-akuma.jpg?1483881228",
        media: "(max-width: 650px)"
      }
    ]
  }
];

//COMPONENTE PRINCIPAL
//  Requiere SliderLayout y SliderImagen
//  Muestra un Slider con botones para cambiar entre las distintas imagenes cargadas.
class Slider extends Component {
  state = {
    imagenes,
    speed: 7000,
    showButtons: true,
    height: "100%",
    index: 0,
    animacion: "sliderLeft"
  };

  //  Asigna los valores del estado segun los props pasados.
  inicializarVariables = () => {
    if (this.props.imagenes != null) {
      this.setState({ imagenes: this.props.imagenes });
    }
    if (this.props.showButtons != null) {
      this.setState({ showButtons: this.props.showButtons });
    }
    if (this.props.speed != null) {
      this.setState({ speed: this.props.speed });
    }
    if (this.props.height != null) {
      this.setState({ height: this.props.height });
    }
  };

  // Timer para cambiar la imagen cada cierto periodo.
  autoChangeImage = () => {
    clearInterval(this.myInterval);
    this.myInterval = setInterval(() => {
      this.nextImage();
    }, this.state.speed);
  };

  //  Salta a la imagen siguiente
  nextImage = () => {
    //  Asigna la animacion
    this.setState({ animacion: "sliderRight" });
    //  Cambia la imagen
    if (this.state.index === this.state.imagenes.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
    //  reinicia el timer
    this.autoChangeImage();
  };

  //  Salta a la imagen anterior
  prevImage = () => {
    //  Asigna la animacion
    this.setState({ animacion: "sliderLeft" });
    //  Cambia la imagen
    if (this.state.index === 0) {
      this.setState({ index: this.state.imagenes.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
    //  reinicia el timer
    this.autoChangeImage();
  };

  selectImage = id => {
    if (id < this.state.index) {
      this.setState({ animacion: "sliderLeft" });
    } else {
      this.setState({ animacion: "sliderRight" });
    }
    this.setState({ index: id });
    this.autoChangeImage(); //  reinicia el timer
  };

  //  FUNCIONES DEL TIEMPO DE VIDA DEL COMPONENTE.
  componentWillMount() {
    //  Inicaliza en stado de Imagenes
    this.inicializarVariables();
  }
  componentDidMount() {
    //  Inicializa el Timer para pasar de imagen automaticamente
    //  cada cierto periodo de tiempo.
    this.autoChangeImage();
  }
  componentWillUnmount() {
    //  detiene el timer para ahorrar memoria cuando se deja de renderizar el documento.
    clearInterval(this.myInterval);
  }
  render() {
    return (
      <SliderLayout
        height={this.state.height}
        showButtons={this.state.showButtons}
        nextButton={this.nextImage}
        backButton={this.prevImage}
        selectImage={this.selectImage}
        maxIndex={this.state.imagenes}
        index={this.state.index}
      >
        <SliderImage
          imagen={this.state.imagenes[this.state.index]}
          animacion={this.state.animacion}
        />
      </SliderLayout>
    );
  }
}

export default Slider;
