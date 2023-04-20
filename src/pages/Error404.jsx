import image from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

import React from "react";

const Error404 = () => {
  return (
    <main className="container flex flex--center flex--column">
      <img className="dog-image" src={image} alt="Doguito" />
      <p className="notfound-text">Esta página no existe</p>
    </main>
  );
};

export default Error404;
