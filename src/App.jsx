import { useState } from "react";

function App() {

  const [ initialInvestment, setInitialInvestment ] = useState(null);
  const [ expectedReturn, setExpectedReturn ] = useState(null);
  const [ annualInvestment, setAnnualInvestment ] = useState(null);
  const [ duration, setDuration] = useState(null);

  function handleInitialInvestment(event) {
    setInitialInvestment(event.target.value);
  }

  function handleExpectedReturn(event){
    setExpectedReturn(event.target.value);
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleDuration(event){
    setDuration(event.target.value);
  }

  return (
    <>
      <div id="header">
        <img src="public/investment-calculator-logo.png" alt="" />
        <h1>React Investment Calculator</h1>
      </div>
      <div id="user-input" className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input type="number" name="initialInvestment" id="initialInvestment" onChange={handleInitialInvestment}/>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input type="number" name="expectedReturn" id="expectedReturn" onChange={handleExpectedReturn}/>
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input type="number" name="annualInvestment" id="annualInvestment" onChange={handleAnnualInvestment}/>
          <label htmlFor="duration">Duration</label>
          <input type="number" name="duration" id="duration" onChange={handleDuration}/>
        </div>
      </div>
    </>
  );
}

export default App;
