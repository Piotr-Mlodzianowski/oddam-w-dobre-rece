import React from "react";
import decoration from  "../../assets/Decoration.svg"
import signature from "../../assets/Signature.svg"
import people from "../../assets/People.jpg"
import "../../scss/home/homeAbout.scss"


const HomeAbout = () => {
    return (
      <section className="about" id="about">
        <div className="about__left">
          <h3 className="left__header">O nas</h3>
          <img
            className="left__decoration"
            src={decoration}
            alt="Signature"
          />
          <p className="left__text">
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img
            className="left__sign"
            src={signature}
            alt="Signature"
          />
        </div>
        <div className="about__right">
        <img className="right__img" src={people} alt="People" />
        </div>
      </section>
    );
}

export default HomeAbout;