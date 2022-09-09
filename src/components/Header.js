import React from "react";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
const Header = ({ onClick }) => {
  return (
    <div className={classes.container}>
      <GiHamburgerMenu onClick={onClick} />
      <div>
        <FaPlusCircle className={classes.Icon} />
        <BiPurchaseTagAlt className={classes.Icon} />
        <MdManageAccounts className={classes.Icon} />
        <div className={classes.headerButton}>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
