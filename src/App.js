import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import githubjobs from "./api/githubjobs";
import LocationSearch from "./components/LocationSearch";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import KeyWordSearch from "./components/KeyWordSearch";
import JobList from "./components/JobList";

import "./App.scss";

class App extends React.Component {
  state = {
    keyword: "javascript",
    jobs: [],
    selectedJob: {},
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const response = await githubjobs.get("", {
      params: {
        description: this.state.keyword,
      },
    });

    this.setState({ jobs: response.data });
  }

  handleFormSubmit(term) {
    this.setState({ keyword: term });
    console.log(this.state.keyword);
    this.getData();
  }

  setSelectedJob(id) {
    console.log(id);
    this.state.jobs.forEach((job) => {
      if (job.id === id) {
        console.log(job);
        this.setState({ selectedJob: job });
      }
    });
  }

  render() {
    return (
      <main className="app">
        <Router>
          <Header>
            <KeyWordSearch
              keyword={this.state.keyword}
              onFormSubmit={this.handleFormSubmit.bind(this)}
            />
          </Header>
          <section className="main-content">
            <Switch>
              <Route exact path="/">
                <LocationSearch />
                <JobList
                  jobs={this.state.jobs}
                  setSelectedJob={this.setSelectedJob.bind(this)}
                />
              </Route>
              <Route path="/job">
                <JobCard job={this.state.selectedJob} />
              </Route>
            </Switch>
          </section>
        </Router>
      </main>
    );
  }
}

export default App;
