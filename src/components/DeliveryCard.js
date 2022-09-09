import React from "react";
import classes from "./DeliveryCard.module.css";
import OrderCard from "./OrderCard";
import { GiPoloShirt } from "react-icons/gi";
import { FcGraduationCap } from "react-icons/fc";
import { GiRunningShoe } from "react-icons/gi";
const DeliveryCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Today's Delivery</p>
        <div>
          <input placeholder="Search Here" />
          <input
            placeholder="All Orders"
            type="text"
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
      </div>
      <div className={classes.orderCard}>
        <OrderCard
          OrderId={"9578947"}
          OrderNo={"ORD-999"}
          backgroundColor={"#faad40"}
        >
          <div className={classes.Icon}>
            <GiPoloShirt />
          </div>
        </OrderCard>
        <OrderCard
          OrderId={"ARIF"}
          OrderNo={"ORD-999"}
          backgroundColor={"#f4365c"}
        >
          <div className={classes.Icon}>
            <GiPoloShirt />
          </div>
          <div className={classes.Icon}>
            <FcGraduationCap />
          </div>
        </OrderCard>
        <OrderCard
          OrderId={"Customer 1"}
          OrderNo={"ORD-9943"}
          backgroundColor={"#5e5e5e"}
        >
          <div className={classes.Icon}>
            <GiPoloShirt />
          </div>
          <div className={classes.Icon}>
            <FcGraduationCap />
          </div>
          <div className={classes.Icon}>
            <GiRunningShoe />
          </div>
        </OrderCard>
        <OrderCard
          OrderId={"Walk in Customer"}
          OrderNo={"ORD-9991"}
          backgroundColor={"#0083ff"}
        >
          <div className={classes.Icon}>
            <GiPoloShirt />
          </div>
          <div className={classes.Icon}>
            <FcGraduationCap />
          </div>
          <div className={classes.Icon}>
            <GiRunningShoe />
          </div>
        </OrderCard>
        <OrderCard
          OrderId={"9578947"}
          OrderNo={"ORD-9949"}
          backgroundColor={"#0083ff"}
        >
          <div className={classes.Icon}>
            <GiPoloShirt />
          </div>
          <div className={classes.Icon}>
            <FcGraduationCap />
          </div>
          <div className={classes.Icon}>
            <GiRunningShoe />
          </div>
        </OrderCard>
      </div>
    </div>
  );
};

export default DeliveryCard;
