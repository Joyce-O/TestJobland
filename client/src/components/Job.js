import React from 'react';
// import Typography from '@material-ui/core/Typography';


export default function Job({job}) {
    return (
        <div className="job">
           <p>{job.title}</p>
           <p>{job.company}</p>
           <p>{job.location}</p>
           <p>{job.type}</p>


        </div>
    )
}