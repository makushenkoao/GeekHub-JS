import React from 'react';
import { validateConfirmPassword, useFormContext, PasswordInput } from "../../";

export const FormConfirmPasswordField = ({
    onChange,
    required,
    onError,
    ...rest
}) => {
    const {values} = useFormContext();
    const {password} = values;

    const handleChange = event => {
        const {value} = event.target;
        let errorMessage = validateConfirmPassword(password, value);
        onError(errorMessage);
        onChange(value);
    }

    return (
        <PasswordInput
            onChange={handleChange}
            required={required}
        />
    );
};

