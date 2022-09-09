import React from "react";
import classes from "./SideBarButton.module.css";
import { FaHome } from "react-icons/fa";

const SideBarButton = ({ children, name, sideBar }) => {
  const center = !sideBar ? classes.container1 : classes.container;
  return (
    <div className={center}>
      {children}
      {sideBar && <p>{name}</p>}
    </div>
  );
};

export default SideBarButton;
