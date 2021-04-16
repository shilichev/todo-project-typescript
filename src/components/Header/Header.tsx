import React from "react";
import classes from "./Header.module.css";

const Header = () => (
  <div className={classes.header}>
    <p className={classes.projectName}>Project ToDo</p>
    <p className={classes.name}>Shilichev Daniil</p>
  </div>
);

export default Header;