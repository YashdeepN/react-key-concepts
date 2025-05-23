import React, { useState } from 'react'

const EmailValidation = () => {

    const [errMsg, setErrMsg] = useState("")
    let errorMessage = "";

    function evaluateEmail(event) {
        const typedEmail = event.target.value;
        if (typedEmail.trim() === "" || !typedEmail.includes("@")) {
            setErrMsg("Wrong Email")
        } else {
            setErrMsg("Corrt Email")

        }
    }
    return (
        <>
            <input placeholder='your email' type='email' onBlur={evaluateEmail} />
            <p>{errMsg}</p>
        </>
    )
}

export default EmailValidation