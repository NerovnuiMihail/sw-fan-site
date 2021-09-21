import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import icon from './img/cansel.svg';

import '../index.css';
import styles from './UiInput.module.css';

const UiInput = ({value, handleInputChange, placeholder, classes}) => {
    return (
        <div className={classNames(styles.wrapper__input, classes)}>
            <input
                type="text"
                value={value}
                onChange={e => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                onClick={() => value && handleInputChange('')}
                className={classNames(styles.clear, !value && styles.clear__disabled)}
                src={icon}
                alt="clear"
            />
        </div>
    );
};

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
};

export default UiInput;