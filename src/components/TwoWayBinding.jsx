import React, { useState } from 'react'

const TwoWayBinding = () => {
    const [email, setEmail] = useState("")

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }
    return (
        <div>
            <input type="email" value={email} placeholder='your email' onChange={handleChangeEmail} />
        </div>
    )
}

export default TwoWayBinding