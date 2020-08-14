import React from "react";
import JobCard from "./components/JobCard";
import KeyWordSearch from "./components/KeyWordSearch";
import JobList from "./components/JobList";
import dummyData from "./fakeTestData";
import "./App.scss";
import LocationSearch from "./components/LocationSearch";

class App extends React.Component {
  state = {
    keyword: "",
    location: "New York",
    jobs: dummyData,
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

  render() {
    return (
      <div>
        GetMeAJob.com
        <KeyWordSearch />
        <LocationSearch />
        <JobList jobs={this.state.jobs} />
        <JobCard />
      </div>
    );
  }
}

export default App;
