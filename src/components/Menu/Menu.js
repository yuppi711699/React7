import React from "react";
import {NavLink} from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
import css from './Menu.module.scss';
// import { NavLink } from "react-router-dom";

function Menu(){
    return(
        <>
        <h2 >Menu</h2>
        <div><NavLink to={'/'} activeClassName={css.active} exact> Main </NavLink></div>
        <div><NavLink to={'/detail'} activeClassName={css.active}> Datail Page </NavLink></div>
        <div><NavLink to={'/css-module'} activeClassName={css.active} > Css-module </NavLink></div>
        <div><NavLink to={'/list'} activeClassName={css.active} > List </NavLink></div>
        </>
    )
};
export default Menu;