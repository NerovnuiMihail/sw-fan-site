import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routesConfig from "../../routes/routesConfig";
import Header from "../../components/Header/Header";

import styles from  "./App.module.css";

const App = () => {
  return (
      <>
          <BrowserRouter>
              <div className={styles.wrapper}>
                  <Header />

                  <Switch>
                      {routesConfig.map((route, index) => (
                          <Route
                              key={index}
                              exact={route.exact}
                              path={route.path}
                              component={route.component}
                          />
                      ))}
                  </Switch>
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
