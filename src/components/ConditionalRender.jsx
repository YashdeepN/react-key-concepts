import React, { useState } from 'react'

const ConditionalRender = () => {

    const [showTerms, setShowTerms] = useState(false)

    let terms = ""

    if (showTerms) {
        terms = "Ther's some conditions Which I dno't rember reight noew."
    }
    return (
        <div>
            <div>
                <button onClick={() => setShowTerms((prev) => !prev)}>Show Terms and Conditions</button>
            </div>
            <div>
                <p>{terms}</p>
            </div>
        </div>
    )
}

export default ConditionalRender