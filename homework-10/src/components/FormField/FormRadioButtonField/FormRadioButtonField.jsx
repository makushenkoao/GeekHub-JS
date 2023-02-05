import React from 'react';
import { RadioButton } from "../..";

export const FormRadioButtonField = ({
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
            <RadioButton
                {...rest}
                onChange={handleChange}
                required={required}
            />
        </>
    );
};
