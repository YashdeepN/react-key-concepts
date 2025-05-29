import React from "react";
import classes from "./SideDrawer.module.css";

const SideDrawer = ({ handleCloseSideDrawer }) => {
  return (
    <>
      <div className={classes.backdrop} />
      <aside className={classes.drawer} onClick={handleCloseSideDrawer}>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideDrawer;
