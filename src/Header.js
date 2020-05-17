import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import styles from "./Header.module.css";

const Header = ({ location }) =>
  location.pathname !== "/features" && (
    <div className={styles.basebox}>
      <h1 className={styles.base}> Pokus </h1>
    </div>
  );

Header.propTypes = {
  snap: PropTypes.bool,
};

export default withRouter(Header);
