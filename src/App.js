import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import githubjobs from "./api/githubjobs";
import LocationSearch from "./components/LocationSearch";
import Sidebar from "./components/Sidebar";
import JobCard from "./components/JobCard";
import KeyWordSearch from "./components/KeyWordSearch";
import JobList from "./components/JobList";
import ErrorMessage from "./components/ErrorMessage";
import Spinner from "./components/Spinner";

import "./App.scss";

const { useState, useEffect } = require("react");

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("javascript");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});

  useEffect(() => {
    getData();
  }, [keyword, location]);

  const getData = async () => {
    return await githubjobs
      .get("", {
        params: {
          description: keyword,
          location: location,
        },
      })
      .then((res) => {
        setJobs(res.data);
        setLoading(false);

        if (!res.data.length) {
          setError(true);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error);
        }
      });
  };

  const handleFormSubmit = (term) => {
    setKeyword(term);
  };

  const handleLocationSubmit = (locationString) => {
    setLocation(locationString);
  };

  const handleSelectedJob = (id) => {
    jobs.forEach((job) => {
      if (job.id === id) {
        console.log(job);
        setSelectedJob(job);
      }
    });
  };

  return (
    <main className="app">
      <Router>
        <Sidebar />
        <LocationSearch handleLocationSubmit={handleLocationSubmit} />
        <section className="main-content">
          <KeyWordSearch keyword={keyword} onFormSubmit={handleFormSubmit} />
          {loading ? <Spinner /> : null}
          {!error ? (
            ""
          ) : (
            <ErrorMessage message="Looks like nothing matches your search right now. Try back later." />
          )}
          <Switch>
            <Route exact path="/">
              <JobList jobs={jobs} handleSelectedJob={handleSelectedJob} />
            </Route>
            <Route path="/job">
              <JobCard job={selectedJob} />
            </Route>
          </Switch>
        </section>
      </Router>
    </main>
  );
};

export default App;
