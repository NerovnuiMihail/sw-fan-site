import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import Favorite from "../Favorite/Favorite";
import {useTheme, THEME_NEITRAL, THEME_LIGHT, THEME_DARK} from "../../context/ThemeProvider";

import imgDroid from "./img/droid.svg";
import imgLightsaber from "./img/lightsaber.svg";
import imgSpaceStation from "./img/space-station.svg";

import styles from "./Header.module.css";

const Header = () => {
    const isTheme = useTheme();
    const [icon, setIcon] = useState(imgDroid);

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                return setIcon(imgLightsaber);

            case THEME_DARK:
                return setIcon(imgSpaceStation);

            case THEME_NEITRAL:
                return setIcon(imgDroid);

            default: setIcon(imgDroid);
        }
    }, [isTheme]);


    return (
        <div className={styles.container}>

            <img className={styles.logo} src={icon} alt="icon"/>

            <ul className={styles.list__container}>
                <li>
                    <NavLink exact to="/"> HOME </NavLink>
                </li>
                <li>
                    <NavLink to="/people/?page=1"> PEOPLE </NavLink>
                </li>
                <li>
                    <NavLink exact to="/search"> SEARCH </NavLink>
                </li>
                <li>
                    <NavLink exact to="/not-found"> NOT_FOUND </NavLink>
                </li>
                <li>
                    <NavLink exact to="/fail"> FAIL </NavLink>
                </li>
            </ul>
            <Favorite />
        </div>
    );
};

export default Header;