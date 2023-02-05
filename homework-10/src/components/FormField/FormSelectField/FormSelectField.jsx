import React from 'react';
import { Select } from "../../index";

export const FormSelectField = ({
    onChange,
    onError,
    required,
    ...rest
}) => {
    const handleChange = event => {
        const {value} = event.target;
        onChange(value);
    }
    return (
        <>
            <Select
                {...rest}
                onChange={handleChange}
                required={required}
            />
        </>
    );
};

