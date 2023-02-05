import React from 'react';
import { validateName, Input } from "../..";

export const FormNameField = ({
    onChange,
    onError,
    required,
    ...rest
}) => {
    const handleChange = event => {
        const {value} = event.target;
        let errorMessage = validateName(value, {required});
        onError(errorMessage);
        onChange(value);
    }
    return (
        <Input
            {...rest}
            onChange={handleChange}
            required={required}
        />
    );
};