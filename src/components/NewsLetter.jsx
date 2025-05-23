import React, { useState } from 'react'

const NewsLetter = () => {

    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    function handleUpdateEmail(event) {
        setEmail(event.target.value);
    }

    function handleUpdateAgreement(event) {
        setAgree(event.target.checked);
    }

    function handleSignUp(event) {
        event.preventDefault()

        const formData = { userEmail: email, userAgreed: agree, }
        console.log(formData)
    }

    return (
        <form onSubmit={handleSignUp}>
            <div><label htmlFor="email">Your Email</label><input type="email" id="email" onChange={handleUpdateEmail} /></div>
            <div>
                <input type="checkbox" id='agree' onChange={handleUpdateAgreement} />
                <label htmlFor="agree">Agree to term and conditions</label>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default NewsLetter