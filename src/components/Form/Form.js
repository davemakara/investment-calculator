import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [invDuration, setInvDuration] = useState("");

  const displayCurrentSavings = (event) => {
    setCurrentSavings(event.target.value);
  };

  const displayYearlySavings = (event) => {
    setYearlySavings(event.target.value);
  };

  const displayExpectedInterest = (event) => {
    setExpectedInterest(event.target.value);
  };

  const displayInvestmentDuration = (event) => {
    setInvDuration(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let investmentData = {
      "current-savings": +currentSavings,
      "yearly-contribution": +yearlySavings,
      "expected-return": +expectedInterest,
      duration: +invDuration,
    };

    props.submitted(investmentData);

    // setCurrentSavings("");
    // setYearlySavings("");
    // setExpectedInterest("");
    // setInvDuration("");
  };

  const resetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvDuration("");

    props.resetted("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={displayCurrentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={displayYearlySavings}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={displayExpectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={invDuration}
            onChange={displayInvestmentDuration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
