import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./Panel.module.css";
import About from "./About";
import GetInTouch from "./GetInTouch";
import Header from "./Header";
import Features from "./Features";
import Footer from "./Footer";

const LeftPanel = () => {
  const [toTop, setTop] = useState(false);
  // const [isMobile, setMobile] = useState(false);

  // NOTE: Below, and state above, will be used to switch the Pokus position,
  // such that it's shown first on mobile.
  // function checkViewport() {
  //   if (window.innerWidth > 630) {
  //     setMobile(false);
  //   } else {
  //     setMobile(true);
  //   }
  // }

  // useEffect(() => {
  //   checkViewport();
  //   let timeout = false;
  //   window.addEventListener("resize", () => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(checkViewport, 250);
  //   });
  // }, []);

  function onInfoScroll(val = window.scrollY) {
    if (val > 50) {
      setTop(true);
    } else {
      setTop(false);
    }
  }

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
