import React, { useState } from 'react'

const Calculator = () => {

    const [operands, setOperands] = useState({
        "firstOperand": null,
        "secondOperand": null,
    })
    const [operator, setOperator] = useState(null)
    const [result, setResult] = useState(null)

    function handleCalculate() {
        console.log(operands, operator)
        const first = parseFloat(operands.firstOperand)
        const second = parseFloat(operands.secondOperand)

        function calcult(f, s, o) {
            switch (o) {
                case "+":
                    return f + s;
                case "-":
                    return f - s;
                case "*":
                    return f * s;
                case "/":
                    return f / s;
            }
            return;
        }
        setResult(calcult(first, second, operator))
    }

    return (
        <>
            <input type="number" onChange={(event) => setOperands({ ...operands, firstOperand: event.target.value, })} />

            <select name="operator" id="operator" onChange={event => setOperator(event.target.value)}>
                <option value="">operators</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input type="number" onChange={event => setOperands({ ...operands, secondOperand: event.target.value })} />

            <div><button onClick={handleCalculate}>Calculate</button></div>
            <div>
                <p>Result: {result}</p>
            </div>
        </>
    )
}

export default Calculator