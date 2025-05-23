import React from 'react'

const BtnOrAnchor = ({ isBtn, children }) => {
    const Tag = isBtn ? 'button' : 'a'
    return (
        <Tag>{children}</Tag>
    )
}

export default BtnOrAnchor