import React from "react";
import InputField from "./InputField";

const LocationSearch = () => {
  return (
    <div className="location-search">
      <form>
        <label>
          <input type="checkbox" />
          Full Time
        </label>
        <InputField
          label="LOCATION"
          placeholder="City, state, zipcode or country"
          addStyle="box-shadow"
        />
        <label>
          <input value="London" type="checkbox" />
          London
        </label>
        <label>
          <input value="Amsterdam" type="checkbox" />
          Amsterdam
        </label>
        <label>
          <input value="New York" type="checkbox" />
          New York
        </label>
        <label>
          <input value="Berlin" type="checkbox" />
          Berlin
        </label>
      </form>
    </div>
  );
};

export default LocationSearch;
