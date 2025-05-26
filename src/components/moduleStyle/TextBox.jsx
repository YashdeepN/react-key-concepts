import React from 'react'
import classes from "./TextBox.module.css"

const TextBox = ({ children, mode }) => {

    let cssClasses;
    if (mode === 'alert') {
        cssClasses = classes.alert;
    } else if (mode === 'info') {
        cssClasses = classes.info;
    }
    return (
        <div>
            <p className={cssClasses}>{children}</p>
        </div>
    )
}

export default TextBox