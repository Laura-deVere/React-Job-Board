import React from "react";
import JobCard from "./components/JobCard";
import KeyWordSearch from "./components/KeyWordSearch";
import JobList from "./components/JobList";
import dummyData from "./fakeTestData";
import "./App.scss";
import LocationSearch from "./components/LocationSearch";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    keyword: "",
    location: "New York",
    jobs: dummyData,
    selectedJob: {},
  };

  componentDidMount() {
    // this.getData();
    this.setState({ data: dummyData });
  }

  getData(data = {}) {
    const url = `https://jobs.github.com/positions.json?description=javascript&location=new+york`;
    const proxyurl = `https://thingproxy.freeboard.io/fetch/`;
    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((data) => this.setState({ jobs: data }))
      .catch((error) => console.error());
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
      <div>
        <Header>
          <KeyWordSearch />
        </Header>
        <LocationSearch />
        <JobList
          jobs={this.state.jobs}
          setSelectedJob={this.setSelectedJob.bind(this)}
        />
        <JobCard job={this.state.selectedJob} />
      </div>
    );
  }
}

export default App;
