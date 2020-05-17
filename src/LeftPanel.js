import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./Panel.module.css";
import About from "./About";
import GetInTouch from "./GetInTouch";
import Header from "./Header";
import Features from "./Features";
import Footer from "./Footer";

const LeftPanel = () => {
  const [toTop, setTop] = useState(false);
  const [isMobile, setMobile] = useState(false);

  function checkViewport() {
    if (window.innerWidth > 630) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }

  function onInfoScroll(val = window.scrollY) {
    if (val > 50) {
      setTop(true);
    } else {
      setTop(false);
    }
  }

  useEffect(() => {
    checkViewport();
    let timeout = false;
    window.addEventListener("resize", () => {
      clearTimeout(timeout);
      timeout = setTimeout(checkViewport, 250);
    });
  }, []);

  return (
    <Router>
      <div
        class={styles.panel}
        onScroll={(event) => onInfoScroll(event.target.scrollTop)}
      >
        <Header snap={toTop} />
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
        <Footer onNavClick={() => setTop(false)} />
      </div>
    </Router>
  );
};

export default LeftPanel;
