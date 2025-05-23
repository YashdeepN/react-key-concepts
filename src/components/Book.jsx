import React from 'react'

const Book = ({ title, author, children }) => {
    return (
        <div>
            <h2>{title} {children}</h2>
            <p>{author}</p>
        </div>
    )
}

export default Book