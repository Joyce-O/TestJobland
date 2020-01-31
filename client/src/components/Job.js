import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export default function Job({ job }) {
  return (
    <Paper className="job">
      <div>
        <Typography variant="h5" key={job.title.id}>{job.title}</Typography>
        <Typography variant="h6" key={job.title.id}>{job.company}</Typography>
        <Typography key={job.title.id}>{job.location}</Typography>
        <Typography key={job.title.id}>{job.how_to_apply}</Typography>
      </div>
      <div className="job-date">
  <Typography key={job.title.id}>{job.created_at.split(' ').slice(0, 3).join()}</Typography>
      </div>
    </Paper>
  );
}
