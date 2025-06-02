export default function UserInput({ inputs, onInputChange }) {
    function handleInputChange(event) {
        onInputChange(event.target.id, event.target.value);
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input
                        type="number"
                        required
                        name="Initial Investment"
                        id="initialInvestment"
                        value={inputs.initialInvestment}
                        onChange={(event) => handleInputChange(event)}
                    />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input
                        type="number"
                        required
                        name="Annual Investment"
                        id="annualInvestment"
                        value={inputs.annualInvestment}
                        onChange={(event) => handleInputChange(event)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input
                        type="number"
                        required
                        name="Expected Return"
                        id="expectedReturn"
                        value={inputs.expectedReturn}
                        onChange={(event) => handleInputChange(event)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="number"
                        required
                        name="Duration"
                        id="duration"
                        value={inputs.duration}
                        onChange={(event) => handleInputChange(event)}
                    />
                </p>
            </div>
        </section>
    );
}
