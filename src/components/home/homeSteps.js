import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/home/homeSteps.scss"
import icon1 from "../../assets/Icon-1.svg"
import icon2 from "../../assets/Icon-2.svg"
import icon3 from "../../assets/Icon-3.svg"
import icon4 from "../../assets/Icon-4.svg"
import decoration from "../../assets/Decoration.svg"

const HomeSteps = () => {
        return (
            <section className="homesteps" id="what">
                    <h2 className="homesteps__header">Wystarczą 4 proste kroki</h2>
                    <img className="homesteps__decoration" src={decoration} alt="decoration"/>
                <div className="steps">
                    <div className="box">
                        <img className="box__icon" src={icon1} alt="icon 1"/>
                        <p className="box__title">Wybierz rzeczy</p>
                        <p className="box__descr">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="box">
                        <img className="box__icon" src={icon2} alt="icon 2" />
                        <p className="box__title">Spakuj je</p>
                        <p className="box__descr">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="box">
                        <img className="box__icon" src={icon3} alt="icon 3" />
                        <p className="box__title">Zdecyduj komu chcesz pomóc</p>
                        <p className="box__descr">wybierz zaufane miejsce</p>
                    </div>
                    <div className="box">
                        <img className="box__icon" src={icon4} alt="icon 4"  />
                        <p className="box__title">Zamów kuriera</p>
                        <p className="box__descr">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>

                <NavLink className="navlink" to="/logowanie">
                    Oddaj <span>rzeczy</span>
                </NavLink>
            </section>
        );
}

export default HomeSteps;