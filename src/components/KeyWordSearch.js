import React from "react";
import InputField from "./InputField";

const KeyWordSearch = () => {
  return (
    <div className="keyword-search">
      <div className="search-bar">
        <div className="icon-input">
          <i className="lni lni-briefcase"></i>
        </div>
        <InputField placeholder="Title, companies, technologies" />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default KeyWordSearch;
