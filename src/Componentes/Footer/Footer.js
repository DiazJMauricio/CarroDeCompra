import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "../Widgets/SocialLinks";

const Footer = props => {
  return (
    <footer>
      <div className="container">
        <div className="footerContent">
          <div className="contactInfo">
            <h3>DIRECCIÓN</h3>
            <p>Texto de Prueba texto de prueba texto de prueba</p>
            <h3>Email</h3>
            <p>email@email.com</p>
          </div>
          <div className="RightInfo">
            <div className="icons">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
            <div className="pageInfo">
              <p>© 2019 by Diaz J. Mauricio</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
