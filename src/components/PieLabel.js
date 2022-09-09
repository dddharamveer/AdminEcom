import React from "react";
import classes from "./PieLabel.module.css";
const PieLabel = ({ title, backgroundColor }) => {
  return (
    <div className={classes.container}>
      <div style={{ backgroundColor: backgroundColor }}></div>
      <p>{title}</p>
    </div>
  );
};

export default PieLabel;
