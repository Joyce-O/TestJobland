"use strict";

var CronJob = require("cron").CronJob;
var fetchGithub = require('./tasks/fetch-github.js');

new CronJob(
  "* * * * *",
 fetchGithub,
  null,
  true,
  "America/Los_Angeles"
);
