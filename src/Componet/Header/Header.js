import React from "react";
import IconNavbar from "./icon-navbar/IconNavbar";
import SideBar from "./Sidebar-componet/SideBar";
import TitleHeader from "./Title-header/TitleHeader";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <IconNavbar />
      <TitleHeader />
      <SideBar />
    </div>
  );
};

export default Header;
