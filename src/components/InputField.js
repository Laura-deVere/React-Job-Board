import React from "react";

const InputField = ({ label, placeholder, addStyle }) => {
  return (
    <div className="input-field">
      <label>
        {label ? label : ""}
        <input type="text" placeholder={placeholder} className={addStyle} />
      </label>
    </div>
  );
};

export default InputField;
