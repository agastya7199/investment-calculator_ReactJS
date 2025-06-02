export default function UserInput({ fieldName, fieldID, value, onInputChange }) {
    function handleInputChange(event) {
        onInputChange(event.target.id, event.target.value);
    }

    return (
        <p>
            <label htmlFor={fieldID}>{fieldName}</label>
            <input
                type="number"
                required
                name={fieldName}
                id={fieldID}
                value={value}
                onChange={(event) => handleInputChange(event)}
            />
        </p>
    );
}
