import React from 'react';
import { PasswordInput, validatePassword } from "../..";

export const FormPasswordField = ({
    onChange,
    required,
    onError,
    ...rest
}) => {
    const handleChange = event => {
        const {value} = event.target;
        let errorMessage = validatePassword(value, {required});
        onError(errorMessage);
        onChange(value);
    }
    return (
        <PasswordInput
            {...rest}
            onChange={handleChange}
            required={required}
        />
    );
};
