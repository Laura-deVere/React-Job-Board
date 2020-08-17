import React from "react";

const Header = ({ children }) => {
  return (
    <div className="header">
      <h1>
        <span style={{ fontWeight: 700 }}>AWESOME</span> Jobs
      </h1>
      {children}
    </div>
  );
};

export default Header;
