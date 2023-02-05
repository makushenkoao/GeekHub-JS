import React from 'react';
import { validateEmail, Input } from "../..";

export const FormEmailField = ({
    onChange,
    onError,
    required,
    ...rest
}) => {

    const handleChange = event => {
        const {value} = event.target;
        let errorMessage = validateEmail(value, {required});
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