import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';


export default function Jobs({jobs}) { //This is how you pass props
    return (
    <div className="jobs">
        <Typography variant="h1">
            Entry Level Software Jobs
        </Typography>
        {
            jobs.map(
                job => <Job job={job} />
            )
        }
    </div>
    )
}

//Note that  job => <Job job={job} /> is representing the component Job - i.e we're calling it here