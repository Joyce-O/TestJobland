import React from "react";
import "./App.css";
import Jobs from "./components/Jobs";
const axios = require("axios");

const JOB_API_URL = "http://localhost:3500/jobs";

async function fetchJobs(updateCb) {  // Callback to update jobs
  const res = await axios.get(
    JOB_API_URL,
    { crossdomain: true },);

  updateCb(res.data); // Set the value of jobList to the current value
}

function App() {
  // WE HAVE TO STORE IT HERE
  const [jobList, updateJobs] = React.useState([]); // Initialize to an empty array
  // The two destructured args, updateJobs(the second variable) is a function that we can use to update the state for joblist

  React.useEffect(() => {
    // This is react hook, it replaces some class components
    fetchJobs(updateJobs);
  }, []); // It takes in another argument -  the hooks you want to watch and update
  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
//WATCH HOW <Jobs jobs={}/> was declared showing it is has props named jobs could be any name, and it must containg something
// In this case Mockjobs
