import React, { Component } from "react";
import "./Navbar.css";
import "./Cartwidget";
import Cartwidget from "./Cartwidget";
import {NavLink }from 'react-router-dom';
import Img from '../assets/rose.png';



class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
         <h1 className="navbar-logo"><img to={"/home"}src={Img} alt="logo"/></h1>
        <ul className="nav-menu">
        <li><NavLink className="nav-links" to={"/home"}>Inicio</NavLink></li>
        <li><NavLink className="nav-links"to={"/products"}>Productos</NavLink></li>
        <li><NavLink className="nav-links"to={"/nosotros"}>Nosotros</NavLink></li>
        <li><NavLink className="nav-links"to={"/contacto"}>Contacto</NavLink></li>
          </ul>
        <Cartwidget/>
      </nav>
      
    );

  }
}

export default Navbar;
