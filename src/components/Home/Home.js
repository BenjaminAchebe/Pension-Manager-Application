import React from "react";
import classes from "./Home.module.css";

const Home = (props) => {

  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Welcome to ABC Pensions</h1>
        <p className={classes.subtitle}>
          Specially designed for Employers and Employee, for ease of remittance tracking and generation of pension code.
        </p>
        <button className={classes.continuebutton}>
          Continue with registration code
        </button>
        <p className={classes.signup}>
          New employer? <span className={classes.bold}>Sign up</span> / New employee? <span className={classes.bold}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
