import React from 'react';
import classes from "./MySelect.module.css"

const MySelect = ({options, defaultValue, onChangeFn, ...prop}) => {
    return (
        <select
            {...prop}
            className={classes.mySelect}
            onChange={(event) => onChangeFn(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;