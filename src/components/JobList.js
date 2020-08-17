import React from "react";
import JobListItem from "./JobListItem";

const JobList = ({ jobs, setSelectedJob }) => {
  const getJob = (jobs, setSelectedJob) => {
    return jobs.map((job, index) => {
      return (
        <li key={job.id} onClick={() => setSelectedJob(job.id)}>
          <JobListItem job={job} />
        </li>
      );
    });
  };

  return <ul className="job-list">{getJob(jobs, setSelectedJob)}</ul>;
};

export default JobList;
