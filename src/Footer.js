import React from "react";
import { NavLink } from "react-router-dom";
import Radium from "radium";

const Footer = (props) => {
  const linkProps = {
    onClick: props.onNavClick,
    activeStyle: styles.active,
    style: styles.link,
  };
  return (
    <div style={styles.footer}>
      <NavLink exact {...linkProps} to="/">
        About
      </NavLink>
      <NavLink {...linkProps} to="/features">
        Features
      </NavLink>
      <NavLink {...linkProps} to="/getInTouch">
        Get In Touch
      </NavLink>
    </div>
  );
};

let styles = {
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    height: "150px",
    width: "50%",
    bottom: "0px",
    padding: 15,

    "@media (max-width: 850px)": {
      width: "90%",
      fontSize: "110%",
      fontWeight: 500,
    },
  },

  link: {
    textDecoration: "none",
    color: "rgba(138, 147, 165, 0.6)",
    ":hover": {
      color: "rgba(138, 147, 165, 0.8)",
    },
  },

  active: {
    color: "rgba(138, 147, 165, 1)",
  },
};

export default Radium(Footer);
