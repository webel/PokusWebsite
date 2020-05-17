import React, { PropTypes } from "react";
import Radium from "radium";

let styles = {
  basebox: {
    width: "100%",
    textAlign: "center",
  },
  base: {
    fontFamily: "Dancing Script",
    fontSize: "6rem",
    transition: "all 0.5s 0.2s",
    //margin: 'auto auto 0 auto', //TODO: Possibly get rid of this, why's it here..? Can't remember :(

    "@media (max-width: 650px)": {
      fontSize: "5rem",
      fontWeight: 400,
      margin: "5px",
    },
  },
  scrollingbox: {
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
  },
  scrolling: {
    fontFamily: "Dancing Script",
    fontSize: "3rem",
    marginTop: 0,
    marginBottom: 0,
    transition: "all 0.5s 0.2s",
  },
};

const Header = (props) => (
  <div style={[styles.basebox, props.snap && styles.scrollingbox]}>
    <h1 style={[props.snap ? styles.scrolling : styles.base]}> Pokus </h1>
  </div>
);

export default Radium(Header);
