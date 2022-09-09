import React from "react";
import { Chart } from "react-google-charts";
import classes from "./DataWheel.module.css";
// const data = [
//   ["Language", "Popularity"],
//   ["Javascript", 2],
//   ["HTML", 1],
//   ["CSS", 1],
// ];

// const options = {
//   title: "Overview",
//   pieHole: 0.4,
//   is3D: false,
//   colors: ["black", "blue", "red", "green", "yellow", "gray"],
//   legend: "bottom",
//   titleTextStyle: {
//     fontSize: 15,
//   },
//   style: {
//     fontSize: 15,
//   },
// };
import { PieChart } from "react-minimal-pie-chart";
import PieLable from "./PieLabel";

export default function DataWheel() {
  return (
    <div className={classes.container}>
      <p>Overview</p>
      <PieChart
        data={[
          { title: "One", value: 10, color: "#8490a4" },
          { title: "Two", value: 15, color: "#faad41" },
          { title: "Three", value: 20, color: "#2dce8a" },
          { title: "Three", value: 20, color: "#0083ff" },
          { title: "Three", value: 2, color: "#f83362" },
        ]}
        onMouseOver={(e, data) => <div>{data.title}</div>}
        lineWidth={50}
        onClick={(event, data) => console.log(event, data)}
      />
      <div>
        <PieLable title={"Pending"} backgroundColor={"#8490a4"}></PieLable>
        <PieLable title={"Processing"} backgroundColor={"#faad41"}></PieLable>
        <PieLable
          title={"Ready To Deliver"}
          backgroundColor={"#2dce8a"}
        ></PieLable>
        <PieLable title={"Delivered"} backgroundColor={"#0083ff"}></PieLable>
        <PieLable title={"Returned"} backgroundColor={"#f83362"}></PieLable>
      </div>
    </div>
  );
}
