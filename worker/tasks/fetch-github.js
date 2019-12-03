// "use strict";

const fetch = require('node-fetch');

const baseUrl = 'https://jobs.github.com/positions.json?description=python&location=new+york';

module.exports = async function fetchGithub() {
    const res = await fetch(baseUrl);
    const jobs = await res.json();
    console.log(jobs);
}

// fetchGithub(); // Call it to test the function
module.exports();
// "@babel/cli": "^7.7.4",
//     "@babel/core": "^7.7.4",
//     "@babel/preset-env": "^7.7.4",
//     "@babel/register": "^7.7.4",
//     "babel-core": "^7.0.0-bridge.0"