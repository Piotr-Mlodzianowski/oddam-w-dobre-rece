import React from "react";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "../../scss/home/homeNavigation.scss"


const HomeNavigation = () => {
    return (
        <nav className="navigation">
                <ul className="navigation__login">
                    <li><Link className="navLink" to="/logowanie">Zaloguj</Link></li>
                    <li><Link className="navLink" to="/rejestracja">Załóż konto</Link></li>
                </ul>
                <ul className="navigation__menu">
                    <li><ScrollLink className="navLink" to="start">Start</ScrollLink></li>
                    <li><ScrollLink className="navLink" to="what">O co chodzi?</ScrollLink></li>
                    <li><ScrollLink className="navLink" to="about">O nas</ScrollLink></li>
                    <li><ScrollLink className="navLink" to="organizations">Fundacja i organizacje</ScrollLink></li>
                    <li><ScrollLink className="navLink" to="contact">Kontakt</ScrollLink></li>
                </ul>
        </nav>
    );
}

export default HomeNavigation;