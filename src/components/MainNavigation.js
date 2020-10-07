import React from "react";
import ReactDOM from "react-dom";

import Drawer from "./Drawer";

function MainNavigation() {
  const content = <Drawer />;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default MainNavigation;
