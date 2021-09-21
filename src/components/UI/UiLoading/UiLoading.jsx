import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';

import '../index.css';
import styles from './UiLoading.module.css'

const UiLoading = ({theme = 'white', isShadow, classes} = true) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'black':
                return setLoaderIcon(loaderBlack);

            case 'white':
                return setLoaderIcon(loaderWhite);

            case 'blue':
                return setLoaderIcon(loaderBlue);

            default: setLoaderIcon(loaderWhite);
        }
    }, []);

    return (
        <img
            className={classNames(styles.loader, isShadow && styles.shadow, classes)}
            src={loaderIcon}
            alt="Loader"
        />
    );
};

UiLoading.propTypes = {
    theme: PropTypes.string,
    classes: PropTypes.string,
    isShadow: PropTypes.bool
}

export default UiLoading;