import React from 'react';
import decoration from "../../assets/Decoration.svg"
import "../../scss/logout/logout.scss"
import {Link} from "react-router-dom";
import HomeNavigation from "../home/homeNavigation";

const Logout = () => {

    return (
        <>
        <HomeNavigation/>
        <section className="logout">
            <h2 className="logout__header">Wylogowanie nastąpiło <br/> pomyślnie!</h2>
            <div className="logout__decoration"><img className="decoration--img" src={decoration} alt="decoration"/></div>
            <Link className="logout__btn" to="/">Strona główna</Link>
        </section>
        </>
    );
};

export default Logout;