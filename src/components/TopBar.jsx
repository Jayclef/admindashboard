import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ecommerce Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topiconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topiconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="./_MG_0379.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
