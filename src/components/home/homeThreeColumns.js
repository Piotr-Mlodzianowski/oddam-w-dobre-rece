import React from "react";
import "../../scss/home/homeThreeColumns.scss"

const HomeThreeColumns = () =>  {
        return (
            <section className="columns">
                <div className="box">
                    <p className="box__number">10</p>
                    <p className="box__title">oddanych worków</p>
                    <p className="box__description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat voluptat
                    </p>
                </div>
                <div className="box">
                    <p className="box__number">5</p>
                    <p className="box__title">wspartych organizacji</p>
                    <p className="box__description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat voluptat
                    </p>
                </div>
                <div className="box">
                    <p className="box__number">7</p>
                    <p className="box__title">zorganizowanych zbiórek</p>
                    <p className="box__description">
                        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                        enim a elit viverra elementuma. Aliquam erat voluptat
                    </p>
                </div>
            </section>
        );
}

export default HomeThreeColumns;