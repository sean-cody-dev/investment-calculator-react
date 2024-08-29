import Row from "./Row";

export default function Results({userInput, annualData}) {
      // initialize sums as zero
  let totalInterest = 0;
  let investedCapital = 0;

    return (
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
          {annualData.map((rowData, i) => {
            totalInterest += rowData.interest;
            investedCapital = userInput.initialInvestment + userInput.annualInvestment * rowData.year;
            return <Row 
                key={i}
              rowData={rowData} 
              totalInterest={totalInterest}
              investedCapital={investedCapital}
            />;
          })}
        </tbody>
      </table>
    )
}