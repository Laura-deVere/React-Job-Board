import React from "react";
import "../assets/Spinner.css";
const Spinner = () => {
  return (
    <div className="ui segment">
      <div className="ui active inverted dimmer">
        <div className="ui massive text centered inline loader">
          Loading Jobs...
        </div>
      </div>
    </div>
  );
};

export default Spinner;
