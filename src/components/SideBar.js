import React from "react";
import classes from "./SideBar.module.css";
import SideBarButton from "./SideBarButton";
import { RiGalleryLine } from "react-icons/ri";
import { FaHome, FaTag } from "react-icons/fa";
import { AiFillTag, AiFillBook, AiFillSetting } from "react-icons/ai";
import {
  BsFillBasketFill,
  BsFillBarChartLineFill,
  BsPower,
  BsListTask,
} from "react-icons/bs";
import { GrTask } from "react-icons/gr";
import { FcTodoList } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
const SideBar = ({ sideBar }) => {
  const sideBarButton = sideBar && classes.mobileSideBar;
  return (
    <div className={`${classes.container} ${sideBarButton}`}>
      <div className={classes.header}>
        <RiGalleryLine />
        {sideBar && <p>LAUNDRY</p>}
      </div>
      <SideBarButton name={"Dashboard"} sideBar={sideBar}>
        <FaHome />
      </SideBarButton>
      <SideBarButton name={"Pos"} sideBar={sideBar}>
        <AiFillTag color={"#c43352"} />
      </SideBarButton>

      <SideBarButton name={"Orders"} sideBar={sideBar}>
        <BsFillBasketFill color={"#43a77c"} />
      </SideBarButton>

      <SideBarButton name={"Order Status Screen"} sideBar={sideBar}>
        <GrTask color={"#9c8d08"} />
      </SideBarButton>

      <SideBarButton name={"Expense"} sideBar={sideBar}>
        <AiFillBook color={"#c43352"} />
      </SideBarButton>

      <SideBarButton name={"Customers"} sideBar={sideBar}>
        <MdManageAccounts color={"#a9288d"} />
      </SideBarButton>
      <SideBarButton name={"Services"} sideBar={sideBar}>
        <AiFillTag color={"#076ed0"} />
      </SideBarButton>
      <SideBarButton name={"Reports"} sideBar={sideBar}>
        <BsFillBarChartLineFill color={"#9c8d08"} />
      </SideBarButton>
      <SideBarButton name={"Tools"} sideBar={sideBar}>
        <AiFillSetting color={"#be7a39"} />
      </SideBarButton>
      <SideBarButton name={"Logout"} sideBar={sideBar}>
        <BsPower color={"#505050"} />
      </SideBarButton>
    </div>
  );
};

export default SideBar;
