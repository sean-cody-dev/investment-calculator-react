import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

import Row from "./Row";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleInitialInvestment(event) {
    setInitialInvestment(Number(event.target.value));
  }

  function handleExpectedReturn(event) {
    setExpectedReturn(event.target.value);
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(Number(event.target.value));
  }

  function handleDuration(event) {
    setDuration(Number(event.target.value));
  }

  // Passes state values to investment calculator
  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  // initialize sums as zero
  let totalInterest = 0;
  let investedCapital = 0;

  // for each item in annualData, create a row for results
  const resultsTable = (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* map annualData here */}
        {annualData.map((rowData) => {
          totalInterest += rowData.interest;
          investedCapital = initialInvestment + annualInvestment * rowData.year;
          return <Row 
            rowData={rowData} 
            totalInterest={totalInterest}
            investedCapital={investedCapital}
          />;
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <div id="header">
        <img src="public/investment-calculator-logo.png" alt="" />
        <h1>React Investment Calculator</h1>
      </div>
      <div id="user-input" className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            id="initialInvestment"
            onChange={handleInitialInvestment}
          />
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            id="expectedReturn"
            onChange={handleExpectedReturn}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            id="annualInvestment"
            onChange={handleAnnualInvestment}
          />
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
            onChange={handleDuration}
          />
        </div>
      </div>
      {resultsTable}
    </>
  );
}

export default App;
