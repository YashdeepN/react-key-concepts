import React, { useRef } from 'react'

const AddColorForm = () => {

    const txtTitle = useRef();
    const hexColor = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(hexColor.current.value);

    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={txtTitle} type='text' placeholder='color title...' required />
            <input ref={hexColor} type='color' required />
            <button>ADD</button>
        </form>
    )
}

export default AddColorForm