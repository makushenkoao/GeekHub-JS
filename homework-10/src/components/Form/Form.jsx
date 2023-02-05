import React, { useImperativeHandle, useRef, useState, createContext, useContext } from 'react';

export const FormContext = createContext()
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("No Form was provided. Your component must be wrapped in a <Form/> component");
    }
    return context
}

export const Form = React.forwardRef(({
    onSubmit: propsOnSubmit,
    children,
    ...rest
},ref) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const formRef = useRef();
    const submitRef = useRef();
    const isValid = Object.keys(errors).length === 0;

    useImperativeHandle(ref, ()=> ({
        submit: () => {
            submitRef.current.click();
        }
    }))


    const setValue = (name, value) => {
        setValues(prevState => {
            const values = JSON.parse(JSON.stringify(prevState))
            if (value) {
                values[name] = value;
            }
            if (!value && prevState) {
                delete values[name];
            }
            return values;
        })
    }

    const setError = (name, message) => {
        setErrors(prevState => {
            const errors = JSON.parse(JSON.stringify(prevState))
            if (message) {
                errors[name] = message;
            }
            if (!message && prevState) {
                delete errors[name];
            }
            return errors;
        })
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current);
        const values = serialize(formData);

        try {
            if (propsOnSubmit) {
                await propsOnSubmit(values)
            }
        } catch (error) {
            console.log(error);
            alert('The requested action was not successful')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <FormContext.Provider value={{
            isSubmitting,
            values,
            errors,
            isValid,
            setValue,
            setError
        }}>
            <form
                {...rest}
                ref={formRef}
                onSubmit={onSubmit}
            >
                {typeof children === "function" ? children({isSubmitting, isValid, values, errors}) : children}
                <input ref={submitRef} type="submit" hidden/>
            </form>
        </FormContext.Provider>
    );
});


const serialize = data => {
    let obj = {};
    for (let [key,value] of data) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]]
            }
            obj[key].push(value);
        } else {
            obj[key] = value
        }
    }
    return obj
}