import React from "react";
import {Link} from "react-router-dom";
import "../../scss/home/homeHeader.scss"
import decoration from "../../assets/Decoration.svg";

const HomeHeader = () => {

    return (
        <header className="header" id="start">
            <div className="header__pic"></div>
            <div className="header__main">
                <h1 className="main__heading">
                    <span>Zacznij pomagać!</span> Oddaj niechciane rzeczy w zaufane ręce
                </h1>
               <img className="decoration" src={decoration} alt="decoration"/>
                    <ul className="main__buttons">
                        <li className="main__buttons--button">
                            <Link className="navLink" to="/logowanie">
                                Oddaj <span>rzeczy</span>
                            </Link>
                        </li>
                        <li className="main__buttons--button">
                            <Link className="navLink" to="/logowanie">
                                Zorganizuj <span>zbiórkę</span>
                            </Link>
                        </li>
                    </ul>
            </div>
        </header>
    );
}

export default HomeHeader;