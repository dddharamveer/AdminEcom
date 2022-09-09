import React from "react";
import classes from "./StatusCountCard.module.css";

const StatusCountCard = ({ children, IconColor, title, Count }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{title}</p>
        <p>{Count}</p>
      </div>
      <div className={classes.Icon} style={{ backgroundColor: IconColor }}>
        {children}
      </div>
    </div>
  );
};

export default StatusCountCard;
