import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: Number(newValue)
        };
    });
}

  // Passes state values to investment calculator
  const annualData = calculateInvestmentResults(userInput);

  return (
    <>
      <div id="header">
        <img src="public/investment-calculator-logo.png" alt="" />
        <h1>React Investment Calculator</h1>
      </div>
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Results userInput={userInput} annualData={annualData}/>
    </>
  );
}

export default App;
