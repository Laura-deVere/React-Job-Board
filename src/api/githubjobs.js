import axios from "axios";
export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?",
});
// export default axios.create({
//   baseURL: "/positions.json?",
// });
// "proxy": "https://jobs.github.com"
