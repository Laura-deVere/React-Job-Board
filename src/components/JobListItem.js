import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const JobListItem = ({ job }) => {
  const {
    company,
    title,
    company_url,
    type,
    company_logo,
    created_at,
    location,
  } = job;
  return (
    <div className="job-list-item box-shadow">
      <div className="company-logo">
        <img src={company_logo} alt={`${company}-logo`} />
      </div>
      <div className="job-details">
        <p className="company-name">
          {/* <a href={company_url} target="_blank"> */}
          {company}
          {/* </a> */}
        </p>
        <Link to="/job">
          <p className="job-title">{title}</p>
        </Link>
        <p className="job-type">{type}</p>
        <span className="job-location">
          <i className="lni lni-world"></i> {location}
        </span>{" "}
        <span className="job-created-at">
          <i className="lni lni-timer"></i>
          {moment(created_at).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default JobListItem;
