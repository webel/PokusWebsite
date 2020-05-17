import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./Panel.module.css";
import About from "./About";
import GetInTouch from "./GetInTouch";
import Header from "./Header";
import Features from "./Features";
import Footer from "./Footer";

const LeftPanel = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={`${styles.panel} ${styles.left}`}>
        <Header />
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/getInTouch">
            <GetInTouch />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
        <br />
        <Footer />
      </div>
    </Router>
  );
};

export default LeftPanel;
