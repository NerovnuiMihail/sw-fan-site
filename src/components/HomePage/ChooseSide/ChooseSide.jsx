import React from 'react';

import {THEME_LIGHT, THEME_DARK, THEME_NEITRAL} from "../../../context/ThemeProvider";
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'

import styles from './ChooseSide.module.css';
import ChooseSideItem from "./ChooseSideItem";

const ChooseSide = () => (
    <div className={styles.container}>
        <ChooseSideItem
            img={imgLightSide}
            theme={THEME_LIGHT}
            text="Light Side"
            classes="item__light"
        />
        <ChooseSideItem
            img={imgDarkSide}
            theme={THEME_DARK}
            text="Dark Side"
            classes="item__dark"
        />
        <ChooseSideItem
            img={imgFalcon}
            theme={THEME_NEITRAL}
            text="I'm Han Solo"
            classes="item__neitral"
        />
    </div>
    );

export default ChooseSide;