import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Job from "./Job";
// Stepper from material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// Style you want the scroll to be in
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
});

export default function Jobs({ jobs }) {
  const classes = useStyles();
  const theme = useTheme();

  // Setting the page number
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  //if step == 0 show 0 - 40 etc

  //This is how you pass props
  // Paste the state here becuase unlike the state in the App.js this is just for the viewas and not coming from the db
  const [activeStep, setActiveStep] = React.useState(0);

  // Functions that handle the back and forth of the direction
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  console.log("This is job", jobs);
  return (
    <div className="jobs">
      <Paper className="job-page-title">
        <Typography variant="h4" component="h1">
          Entry Level Software Jobs
        </Typography>

        <Typography variant="h6" component="h2">
          Found {numJobs} Jobs
        </Typography>
      </Paper>
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
      <div>
        page {activeStep + 1} of {numPages}
      </div>
      <MobileStepper
        variant="progress"
        steps={numJobs}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

//Note that  job => <Job job={job} /> is representing the component Job - i.e we're calling it here
