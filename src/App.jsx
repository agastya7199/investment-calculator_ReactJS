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
            <UserInput inputs={inputs} onInputChange={handleInputChange} />

            <Results inputs={inputs} />
        </>
    );
}

export default App;
