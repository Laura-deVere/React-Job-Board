import React, { useState, useEffect } from "react";
const LocationSearch = ({ handleLocationSubmit }) => {
  const [term, setTerm] = useState("");
  const [locations, setLocations] = useState([]);

  const renderList = () => {
    const locationsList = ["London", "Amsterdam", "New York", "Berlin"];

    return locationsList.map((item, index) => {
      return (
        <label key={index}>
          {item}
          <input
            type="checkbox"
            name={item}
            onChange={(e) => handleCheckboxChange(e.target.value)}
            value={item}
          />
        </label>
      );
    });
  };

  const handleCheckboxChange = (item) => {
    let found = false;
    let foundIndex;
    locations.forEach((location, index) => {
      if (location === item) {
        found = true;
        foundIndex = index;
      }
    });

    if (found) {
      locations.splice(foundIndex, 1);
      setLocations([...locations]);
    } else {
      setLocations([...locations, item]);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (term.length > 2 && !locations.includes(term)) {
      setLocations([...locations, term]);
    }
    const locationString = locations.join(" ");
    handleLocationSubmit(locationString);
  };

  return (
    <div className="location-search">
      <form onSubmit={onFormSubmit}>
        <div className="input-field">
          <label>
            LOCATION
            <input
              type="text"
              placeholder="City, state, zipcode or country"
              className="box-shadow"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </label>
        </div>
        <div className="checkbox-list">{renderList()}</div>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default LocationSearch;
