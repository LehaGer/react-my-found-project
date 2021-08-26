import React from 'react';
import classes from "./MySelect.module.css"

const MySelect = ({children, ...prop}) => {
    return (
        <select {...prop} className={classes.mySelect}>
            {children}
        </select>
    );
};

export default MySelect;