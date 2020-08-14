import React from "react";
import JobListItem from "./JobListItem";

const getJob = (jobs) => {
  return jobs.map((job, index) => {
    return (
      <li key={index}>
        <JobListItem job={job} />
      </li>
    );
  });
};
const JobList = ({ jobs }) => {
  return <ul className="job-list">{getJob(jobs)}</ul>;
};

export default JobList;
