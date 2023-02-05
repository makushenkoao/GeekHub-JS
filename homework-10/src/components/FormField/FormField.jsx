import React, { useId } from 'react';

import {
    useFormContext,
    FormNameField,
    FormInput,
    FormPasswordField,
    FormEmailField,
    FormPhoneField,
    FormSelectField,
    FormRadioButtonField,
    FormCheckboxField,
    FormConfirmPasswordField,
    FormCheckboxesField
} from "..";


export const FormField = ({
    type = 'text',
    id: propsId,
    label,
    name,
    required,
    ...rest
}) => {

    const innerId = useId();
    const id = propsId || `FormField${innerId}`;

    const { isSubmitting, setValue, setError, errors } = useFormContext();
    const Component = useFormFieldComponent(type)

    const onChange = value => setValue(name, value);
    const onError = errorMessage => setError(name, errorMessage);
    const error = errors[name];

    return (
        <div>
            <label style={{display: 'block'}} htmlFor={getInputId(id)}>{label}</label>
            <Component
                {...rest}
                id={getInputId(id)}
                type={type}
                name={name}
                onChange={onChange}
                onError={onError}
                disabled={isSubmitting}
                aria-describedby={getErrorId(innerId)}
                required={required}
            />
            {error && (
                <span
                    id={getErrorId(innerId)}
                    className='FormField__error'
                >
                    {error}
                </span>
            )}
        </div>
    );
};

const useFormFieldComponent = type => {
    switch (type) {
        case 'name':
            return FormNameField;
        case 'email':
            return FormEmailField;
        case 'phone':
            return FormPhoneField;
        case 'select':
            return FormSelectField;
        case 'radio':
            return FormRadioButtonField;
        case 'checkboxes':
            return FormCheckboxesField
        case 'checkbox':
            return FormCheckboxField;
        case 'password':
            return FormPasswordField;
        case 'confirmPassword':
            return FormConfirmPasswordField;
        default:
            return FormInput;
    }
}

const getInputId = id => `${id}Input`;
const getErrorId = id => `${id}Error`;