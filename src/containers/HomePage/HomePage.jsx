import React from 'react';

import ChooseSide from "../../components/HomePage/ChooseSide/ChooseSide";

import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <h1 className="header__text">HOME PAGE</h1>
            <ChooseSide />
        </>
    );
};

export default HomePage;