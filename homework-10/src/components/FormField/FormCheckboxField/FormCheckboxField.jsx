import React from 'react';
import {Checkbox, REQUIRED} from "../..";

export const FormCheckboxField = ({
    onChange,
    required,
    onError,
    ...rest
}) => {

    const handleChange = event => {
        const {checked} = event.target;
        onChange(checked);
        onError(!checked ? REQUIRED : null)
    }

    return (
        <Checkbox
            {...rest}
            onChange={handleChange}
            required={required}
        />
    );
};