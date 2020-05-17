import React from "react";

import { Pokus } from "./features/pokus/Pokus";
import styles from "./Panel.module.css";

const RightPanel = () => {
  return (
    <div className={`${styles.panel} ${styles.right}`}>
      <Pokus />
    </div>
  );
};

export default RightPanel;
