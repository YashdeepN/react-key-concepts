import React, { useRef, useState } from 'react'

const CounterRefState = () => {
    let count1 = 0;
    const [count2, setCount2] = useState(0);
    const count3 = useRef(9);
    return (
        <ul>
            <li>{count1} <button onClick={() => count1++}>Increment</button></li>
            <li>{count2} <button onClick={() => setCount2(count2 + 1)}>Increment</button></li>
            <li>{count3.current} <button onClick={() => count3.current++}>Increment</button></li>
        </ul>
    )
}

export default CounterRefState