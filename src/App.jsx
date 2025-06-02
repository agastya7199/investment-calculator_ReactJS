import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
    const [inputs, setInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleInputChange(id, value) {
        setInputs((prevInputs) => {
            const newInputs = {
                ...prevInputs,
                [id]: Number(value),
            };
            return newInputs;
        });
    }

    return (
        <>
            <Header />
            <section id="user-input">
                <div className="input-group">
                    <UserInput
                        fieldName="Initial Investment"
                        fieldID="initialInvestment"
                        value={inputs.initialInvestment}
                        onInputChange={handleInputChange}
                    />
                    <UserInput
                        fieldName="Annual Investment"
                        fieldID="annualInvestment"
                        value={inputs.annualInvestment}
                        onInputChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <UserInput
                        fieldName="Expected Return"
                        fieldID="expectedReturn"
                        value={inputs.expectedReturn}
                        onInputChange={handleInputChange}
                    />
                    <UserInput
                        fieldName="Duration"
                        fieldID="duration"
                        value={inputs.duration}
                        onInputChange={handleInputChange}
                    />
                </div>
            </section>

            <Results inputs={inputs} />
        </>
    );
}

export default App;
