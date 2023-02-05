import React from "react";
import { useFormContext , REQUIRED, Checkbox } from "../..";

export const FormCheckboxesField = ({
    options,
    name,
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const { values } = useFormContext();

    const onChange = ({target}) => {
        const value = target.value;
        let arr = values[name] ? [...values[name]] : [];
        if (arr.includes(value)) {
            arr = arr.filter(_ => _ !== value);
        } else {
            arr.push(value)
        }
        propsOnChange(arr);
        onError(required && arr.length === 0 ? REQUIRED : null)
    }

    return options.map(option => (
        <Checkbox
            {...rest}
            key={String(option.value)}
            name={name}
            value={option.value}
            label={option.label}
            onChange={onChange}
        />
    ))
};
