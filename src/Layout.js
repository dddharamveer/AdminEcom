import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import classes from "./Layout.module.css";
const Layout = ({ children }) => {
  const [sideBar, setSideBar] = React.useState(false);
  const onClick = () => {
    setSideBar((prev) => !prev);
  };
  console.log(sideBar);
  return (
    <div className={classes.container}>
      <div className={classes.Header}>
        <Header onClick={onClick} />
      </div>
      <div className={classes.SideBar}>
        <SideBar sideBar={sideBar} />
      </div>
      <div className={classes.MainContainer}>{children}</div>
    </div>
  );
};

export default Layout;
