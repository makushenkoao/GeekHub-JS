import React, {useImperativeHandle, useRef, useState, createContext} from 'react';


export const FormContext = createContext({isSubmitting: false})

const Form = React.forwardRef(({
    onSubmit: propsOnSubmit,
    children,
    ...rest

},ref) => {
    console.log({...rest})

    // clear error - useEffect - callback - unmount
    const formRef = useRef();
    const submitRef = useRef();

    // const [error, setError] = useState();
    // const [value, setValue] = useState();
    useImperativeHandle(ref, ()=> ({
        submit: () => {
            submitRef.current.click()
        }
    }))

    const [isSubmitting, setIsSubmitting] = useState(false);

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

    // const context = {
    //     isSubmitting,
    //     value,
    //     error
    //     setValue,
    //     setError
    // } (value in FormContext.Provider)

    return (
        <FormContext.Provider value={{isSubmitting}}>
            <form
                {...rest}
                ref={formRef}
                onSubmit={onSubmit}
            >
                {children}
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

export default Form;
