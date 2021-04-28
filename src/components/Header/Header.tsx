import classes from "./Header.module.css";
import React from "react";
const Header = () => (
  <div className={classes.header}>
    <p className={classes.projectName}>Project ToDo</p>
    <p className={classes.name}>Shilichev Daniil</p>
  </div>
);

export default Header;
