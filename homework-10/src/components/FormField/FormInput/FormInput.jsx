import React from 'react';
import { Input } from "../.."

export const FormInput = ({
   onChange,
   ...rest
}) => {

    const handleChange = ({target}) => {
        onChange(target.value);
    }

    return (
        <Input
            {...rest}
            onChange={handleChange}
        />
    );
};