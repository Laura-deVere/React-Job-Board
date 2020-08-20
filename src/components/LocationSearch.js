import React from "react";

const LocationSearch = () => {
  return (
    <div className="location-search">
      <form>
        <label>
          <input type="checkbox" />
          Full Time
        </label>
        <div className="input-field">
          <label>
            LOCATION
            <input
              type="text"
              placeholder="City, state, zipcode or country"
              className="box-shadow"
              value=""
            />
          </label>
        </div>
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
