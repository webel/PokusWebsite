import React, { useState } from "react";
import { StyleRoot } from "radium";

import "./App.css";
import "./colors.css";

import About from "./About";
import Header from "./Header";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function App() {
  // const [isExpanded, setExpanded] = useState(false);

  return (
    // TODO: remove StyleRoot, can be done when the rest of radium
    // classes have been converted to css module
    <StyleRoot>
      <div className="container">
        <LeftPanel />
        {/* <Header title="Pokus" /> */}
        <RightPanel />
      </div>
    </StyleRoot>
  );
}

export default App;
