import React, { Children } from "react";
import classes from "./OrderCard.module.css";

const OrderCard = ({ OrderId, OrderNo, backgroundColor, children }) => {
  return (
    <div
      className={classes.MainContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={classes.InsideContainer}>
        <div className={classes.header}>
          <p>{OrderId}</p>
          <p>{OrderNo}</p>
        </div>
        <div className={classes.Icons}>{children}</div>
      </div>
    </div>
  );
};

export default OrderCard;
