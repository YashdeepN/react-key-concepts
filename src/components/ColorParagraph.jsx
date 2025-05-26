import React, { useState } from 'react'

const ColorParagraph = () => {

    const [enteredColor, setEnteredColor] = useState("");

    function handleUpdateTextColor(event) {
        setEnteredColor(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleUpdateTextColor} />
            <p style={{ color: enteredColor }}>The color of this text changes dynamically!</p>
        </div>
    )
}

export default ColorParagraph