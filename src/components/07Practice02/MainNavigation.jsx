import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import SideDrawer from "./SideDrawer";

const MainNavigation = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  function handleOpenDrawer() {
    console.log("handled");
    setShowSideDrawer(true);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={handleOpenDrawer}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {showSideDrawer && (
        <SideDrawer handleCloseSideDrawer={() => setShowSideDrawer(false)} />
      )}
      <div id="my"></div>
    </>
  );
};

export default MainNavigation;
