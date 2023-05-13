import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    const handleAddition = () => {
        if (!validateInputs()) {
            return;
        }
        setResult(parseFloat(num1) + parseFloat(num2));
        setErrorMessage("");
    };

    const handleSubtraction = () => {
        if (!validateInputs()) {
            return;
        }
        setResult(parseFloat(num1) - parseFloat(num2));
        setErrorMessage("");
    };

    const handleMultiplication = () => {
        if (!validateInputs()) {
            return;
        }
        setResult(parseFloat(num1) * parseFloat(num2));
        setErrorMessage("");
    };

    const handleDivision = () => {
        if (!validateInputs()) {
            return;
        }
        if (parseFloat(num2) === 0) {
            setErrorMessage("Cannot divide by zero");
            return;
        }
        setResult(parseFloat(num1) / parseFloat(num2));
        setErrorMessage("");
    };

    const validateInputs = () => {
        if (!num1) {
            setErrorMessage("Error: Num1 cannot be empty");
            return false;
        }
        if (!num2) {
            setErrorMessage("Error: Num2 cannot be empty");
            return false;
        }
        if (
            isNaN(parseFloat(num1)) ||
            isNaN(parseFloat(num2)) ||
            !isFinite(num1) ||
            !isFinite(num2)
        ) {
            setErrorMessage("Error: Please enter valid numbers");
            return false;
        }
        return true;
    };


    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <div className="input-container">
                <label>
                    <input type="text" placeholder="Num1" value={num1} onChange={handleNum1Change} />
                </label>
                <label>
                    <input type="text" placeholder="Num2" value={num2} onChange={handleNum2Change} />
                </label>
            </div>
            <div className="button-container">
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleDivision}>/</button>
            </div>

            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {result && <div className="result">Result = {result}</div>}

            {result && (
                <div className="success-message">
                    Success: Your result is shown above!
                </div>
            )}

        </div>
    );
}

export default Calculator;