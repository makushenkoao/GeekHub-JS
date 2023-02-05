import React from 'react';
import { validatePhone, Input } from "../..";

export const FormPhoneField = ({
   onChange,
   onError,
   required,
   ...rest
}) => {
    const handleChange = event => {
        const {value} = event.target;
        let errorMessage = validatePhone(value, {required});
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