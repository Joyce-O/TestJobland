"use strict";

var CronJob = require("cron").CronJob;
var fetchGithub = require('./tasks/fetch-github.js');

new CronJob(
  "1 * * * * *",
  function() {
    console.log( 'see', fetchGithub());
  },
  null,
  true,
  "America/Los_Angeles"
);
