import React from 'react';
import HomeNavigation from "../home/homeNavigation"
import HomeHeader from "../home/homeHeader"
import HomeThreeColumns from "../home/homeThreeColumns"
import HomeSteps from "../home/homeSteps"
import HomeAbout from "../home/homeAbout"
import HomeHelp from "../home/homeHelp"
import HomeContact from "../home/homeContact"

const Home = () => {

    return (
        <>
            <HomeNavigation/>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAbout/>
            <HomeHelp/>
            <HomeContact/>
        </>
    );
};

export default Home;