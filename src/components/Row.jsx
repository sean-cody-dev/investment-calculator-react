import { formatter } from "../util/investment";

export default function Row({rowData, totalInterest, investedCapital}) {

    const { year, valueEndOfYear, interest } = rowData;

    return (
        <tr>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    )
}
