import React from "react";
import { Link } from "react-router-dom";

const getTimeAgo = (created_at) => {
  const createdAt = new Date(created_at);
  const day = createdAt.getDate();
  let timeNow = Date.now();
  timeNow = new Date(timeNow);
  let daysAgo = timeNow.setDate(timeNow.getDate() - day);
  daysAgo = new Date(daysAgo);
  daysAgo = daysAgo.getDate();
  console.log(daysAgo);
};
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
          {}
        </span>
      </div>
    </div>
  );
};

export default JobListItem;
