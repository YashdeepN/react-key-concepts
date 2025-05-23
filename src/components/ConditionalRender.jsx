import React, { useState } from 'react'

const ConditionalRender = () => {

    const [showTerms, setShowTerms] = useState(false)

    let terms = ""

    if (showTerms) {
        terms = <p>Ther's some conditions Which I dno't rember reight noew.</p>
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