import React from "react";
import "./Header.css";
import ImgHeaderL from "../../../Img/imagen1L.jpg";
import ImgHeaderM from "../../../Img/imagen1M.jpg";
import ImgHeaderS from "../../../Img/imagen1S.jpg";

const HeaderLayout = props => {
  return (
    <header>
      <div className="headerContainer">
        <div className="headerImage">
          <picture>
            <source srcset={ImgHeaderS} media="(max-width: 600px)" />
            <source srcset={ImgHeaderM} media="(max-width: 1200px)" />
            <img className="headerImg" src={ImgHeaderL} alt="Header" />
          </picture>
        </div>
        <div className="headerTitle">
          <div className="headerTitleBox">
            <h2> Esto es una tienda virtual</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
