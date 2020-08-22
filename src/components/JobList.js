import React from "react";
import JobListItem from "./JobListItem";

const JobList = ({ jobs, handleSelectedJob }) => {
  const getJob = (jobs, handleSelectedJob) => {
    return jobs.map((job, index) => {
      return (
        <li key={job.id} onClick={() => handleSelectedJob(job.id)}>
          <JobListItem job={job} />
        </li>
      );
    });
  };

  return <ul className="job-list">{getJob(jobs, handleSelectedJob)}</ul>;
};

export default JobList;
