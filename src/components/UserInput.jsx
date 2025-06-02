export default function UserInput({ fieldName, value, onInputChange }) {
    function handleInputChange(event) {
        onInputChange(event.target.id, event.target.value);
    }

    return (
        <p>
            <label htmlFor={fieldName}>Initial Investment</label>
            <input
                type="number"
                required
                id={fieldName}
                value={value}
                onChange={(event) => handleInputChange(event)}
            />
        </p>
    );
}
