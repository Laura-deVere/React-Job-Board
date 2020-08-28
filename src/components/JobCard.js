import React from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import moment from "moment";

const JobCard = ({ job }) => {
  const {
    how_to_apply,
    company,
    company_logo,
    company_url,
    created_at,
    location,
    title,
    description,
    type,
  } = job;
  return (
    <div className="job-card">
      <div className="job-card-side">
        <Link to="/">
          <button className="btn-back">
            <i className="lni lni-arrow-left"></i>Back to search
          </button>
        </Link>
        <div className="job-card-apply">
          <h3>HOW TO APPLY</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(how_to_apply),
            }}
          ></div>
        </div>
      </div>
      <div className="job-details">
        <p className="job-title">{title}</p>
        <p className="job-type">{type}</p>
        <span className="job-created-at">
          <i className="lni lni-timer"></i>
          {moment(created_at).fromNow()}
        </span>
        <p className="company-name">
          <a href={company_url} target="_blank">
            {company}
          </a>
        </p>
        <div className="company-logo">
          <img src={company_logo} alt={`${company}-logo`} />
        </div>
        <span className="job-location">
          <i className="lni lni-world"></i>
          {location}
        </span>
        <p
          className="job-description"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></p>
      </div>
    </div>
  );
};

export default JobCard;
