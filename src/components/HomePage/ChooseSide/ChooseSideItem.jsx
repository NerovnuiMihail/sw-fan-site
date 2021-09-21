import React from 'react';
import PropTypes from "prop-types";
import {useTheme} from "../../../context/ThemeProvider";
import classNames from "classnames";

import styles from "./ChooseSide.module.css";


const ChooseSideItem = ({theme, text, img, classes}) => {
    const isTheme = useTheme();

    return (
        <div
            className={classNames(styles.item, styles[classes])}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text}/>
        </div>
    );
};
ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string,
}

export default ChooseSideItem;