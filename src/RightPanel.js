import React, { useState } from "react";

import { Pokus } from "./features/pokus/Pokus";
import styles from "./Panel.module.css";

const RightPanel = () => {
  const [isExpanded, setExpanded] = useState(false);

  const widthStyle = isExpanded ? styles.full : styles.half;

  return (
    // TODO: remove StyleRoot, can be done when the rest of radium
    // classes have been converted to css module
    <div
      className={`${styles.panel} ${widthStyle} ${styles.right}`}
      onDoubleClick={() => setExpanded(!isExpanded)}
    >
      <Pokus />
    </div>
  );
};

export default RightPanel;
