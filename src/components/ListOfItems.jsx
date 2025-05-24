import React, { useState } from 'react'

const ListOfItems = () => {
    // const items = ["ginger", "milk", "sugar", "bread",]
    const [items, setItems] = useState([])

    let item = null;

    function handleAddItem() {
        setItems(prev => [...prev, item])
    }
    return (
        <div>
            <form action="">
                <input type="text" name="" id="" onBlur={event => { item = event.target.value; event.target.value = "" }} />
                <button type='button' onClick={handleAddItem}> Add</button>
            </form>
            {items.length > 0 && <ul>
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>}
        </div>
    )
}

export default ListOfItems