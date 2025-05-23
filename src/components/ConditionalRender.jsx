import React, { useState } from 'react'

const ConditionalRender = () => {

    const [showTerms, setShowTerms] = useState(false)

    let terms = ""

    if (showTerms) {
        terms = <div> <h2>Terms and conditions:</h2>
            <p>Ther's some conditions Which I dno't rember reight noew.</p>
            <ul>
                <li>Term 1</li>
                <li>Term 2</li>
                <li>Term 3</li>
                <li>Term 4</li>
            </ul>
        </div>

    }
    return (
        <div>
            <div>
                <button onClick={() => setShowTerms((prev) => !prev)}>Show Terms and Conditions</button>
            </div>
            {terms}
        </div>
    )
}

export default ConditionalRender