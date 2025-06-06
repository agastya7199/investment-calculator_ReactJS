import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ inputs }) {
    let result = undefined;
    if (
        inputs.initialInvestment &&
        inputs.annualInvestment &&
        inputs.expectedReturn &&
        inputs.duration > 0
    ) {
        result = calculateInvestmentResults(inputs);
    }

    return (
        <>
            {!result && <p className="center">Please enter valid input data</p>}
            {result && (
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
                        {result.map((yearData) => {
                            const totalInterest =
                                yearData.valueEndOfYear -
                                yearData.year * yearData.annualInvestment -
                                inputs.initialInvestment;
                            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                            return (
                                <tr key={yearData.year}>
                                    <td>{yearData.year}</td>
                                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                    <td>{formatter.format(yearData.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </>
    );
}
