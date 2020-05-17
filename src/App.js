import React from "react";
import { StyleRoot } from "radium";

import "./App.css";
import "./colors.css";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function App() {
  return (
    // TODO: remove StyleRoot, can be done when the rest of radium
    // classes have been converted to css module
    <StyleRoot>
      <div className="container">
        <LeftPanel />
        <RightPanel />
      </div>
    </StyleRoot>
  );
}

export default App;
