import image from "../assets/img/doguito.svg";
import "../assets/css/componentes/header.css";
import { Link } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <header className="header container">
      <div className="menu-hamburguer">
        <span className="menu-hamburguer__icon"></span>
      </div>
      <div className="header-container">
        <Link to="/" className="flex flex--center">
          <img className="header__logo" src={image} alt="doguito" />
          <h1 className="header__title">Petshop</h1>
        </Link>
      </div>
      <div className="menu-header">
        <ul className="menu-items">
          <li>
            <a className="menu-item menu-item--entrar" href="#">
              Entrar
            </a>
          </li>
          <li>
            <a className="menu-item" href="#">
              Productos
            </a>
          </li>
          <li>
            <Link className="menu-item" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/sobre">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
