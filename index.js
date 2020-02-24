const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

// var redis = require("redis"),
// client = redis.createClient();
const { promisify } = require("util");

// const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 3040;

app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/jobs", async (req, res) => {
  const jobs = await getAsync("githubJobs");
  console.log(JSON.parse(jobs).length);
  return res.send("jobs");
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// THIS API IS STANDING AS PROXY FOR THE CORS ISSUE
