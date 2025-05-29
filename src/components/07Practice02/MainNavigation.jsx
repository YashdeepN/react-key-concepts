import React from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  function handleOpenDrawer() {
    console.log("handled");
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
    </>
  );
};

export default MainNavigation;
