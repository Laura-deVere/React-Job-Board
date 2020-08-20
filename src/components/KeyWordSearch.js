import React, { useState } from "react";

const KeyWordSearch = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  return (
    <div className="keyword-search">
      <div className="search-bar">
        <div className="icon-input">
          <i className="lni lni-briefcase"></i>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onFormSubmit(term);
          }}
        >
          <div className="input-field">
            <label>
              <input
                type="text"
                placeholder="Title, companies, technologies"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default KeyWordSearch;
