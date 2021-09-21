import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store/store";

import ThemeProvider from "./context/ThemeProvider";
import App from './containers/App/App.jsx';
import './styles/index.css';


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));
