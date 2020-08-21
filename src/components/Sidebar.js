import React from "react";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const style = {
    width: "50px",
    height: "auto",
  };
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" style={style} />
    </div>
  );
};

export default Sidebar;
