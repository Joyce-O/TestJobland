// "use strict";
var redis = require("redis"),
    client = redis.createClient();
const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);// we want to handle it in the command line
const setAsync = promisify(client.set).bind(client);

const fetch = require('node-fetch');

const baseUrl = 'https://jobs.github.com/positions.json?description=python&location=new+york';

async function fetchGithub() {
    let resultCount = 1, onPage = 0;
    const allJobs = [];

    // Fetch all pages
    while (resultCount > 0) {
        try {
            const res = await fetch(`${baseUrl}?page=${onPage}`); 
            const jobs = await res.json()
            allJobs.push(...jobs); // Spread because what we're getting from github is an array and we want to store it in an array
            resultCount = jobs.length;
            console.log('got', resultCount, 'jobs');
            console.log('onPage', onPage);
        // console.log('allJobs', allJobs);
            onPage++;
        } catch(err) {
            return ('Unexpected error occurred', err);
        }
    }

    // Filter algorithm to get junior role
    const jnrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase(); // To make sure everything is in same case.
        // let isJunior = true;

        // Algorithm logic

        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('snr.') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('architect')
            ) {
                return false;
            }
            return true;
    })
    console.log('Filtered down to ', jnrJobs.length);
    console.log('Final jobs gotten are', allJobs.length);

    // Set in redis
    const res = await setAsync('githubJobs', JSON.stringify(jnrJobs));
    console.log({res});
   
}

fetchGithub(); // Call it to test the function
module.exports = fetchGithub;
// "@babel/cli": "^7.7.4",
//     "@babel/core": "^7.7.4",
//     "@babel/preset-env": "^7.7.4",
//     "@babel/register": "^7.7.4",
//     "babel-core": "^7.0.0-bridge.0"