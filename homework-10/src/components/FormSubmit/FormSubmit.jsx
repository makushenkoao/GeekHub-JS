import React from 'react';
import { useFormContext } from "..";

export const FormSubmit = () => {
    const { isValid, values } = useFormContext();

    return (
        <button
            disabled={!isValid || Object.keys(values).length === 0}
        >
            Submit
        </button>
    );
};