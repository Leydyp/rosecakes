import React from "react";
import Cartwidget from "./Cartwidget";
import "../components/Navbar.css";
import Img from '../assets/rose.png';

const Navbar = () => {
  return (
    <nav className="navbarItems">
      <h2>
      <h1 ><img href="#"src={Img} className="navbar-logo"alt="logo"/></h1>
      </h2>
      <ul className="navMenu">
        <li>
          <a className="nav-links" href="#">Inicio</a>
          <a className="nav-links"href="#">Nosotros</a>
          <a className="nav-links"href="#">Productos</a>
          <a className="nav-links"href="#">Contacto</a>
        </li>
        <li className="navbarItem">
          <Cartwidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
