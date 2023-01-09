import React, {useId, useContext, createContext, useState, useRef} from 'react';
import Input from './Input'
import PasswordInput from './PasswordInput'
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import Select from "./Select";
import CheckboxesInputs from "./CheckboxesInputs";
import RadioButton from "./RadioButton";
import {FormContext} from "./Form";

// let password;

const FormField = ({
    type = 'text',
    id: propsId,
    label,
    children,
    ...rest
}) => {

    const innerId = useId();
    const id = propsId || `FormField${innerId}`;
    const Component = useFormFieldComponent(type);
    const {isSubmitting} = useContext(FormContext)

    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [consent, setConsent] = useState();
    const [prefer, setPrefer] = useState();
    const [gender, setGender] = useState();
    const [race, setRace] = useState();
    const [password, setPassword] = useState();


    // const [isValid, setIsValid] = useState({
    //     name: false,
    //     lastName: false,
    //     email: false,
    //     phone: false,
    //     password: false,
    // })

    // const valuesContext = createContext();
    // const errorsContext = createContext();

    // const [value, setValue] = useState({
    //     checkbox: false,
    //     checkboxes: [],
    //     ...
    // });


    const onChange = event => {
        if (event.target.name === 'firstName') setName(event.target.value)
        if (event.target.name === 'lastName') setLastName(event.target.value)
        if (event.target.name === 'email') setEmail(event.target.value)
        if (event.target.name === 'phone') setPhone(event.target.value)
        if (event.target.name === 'gender') setGender(event.target.value)
        if (event.target.name === 'prefer') setPrefer(event.target.value)
        if (event.target.name === 'race') setRace(event.target.value)
        if (event.target.name === 'checkbox') setConsent(event.target.value)
        if (event.target.name === 'password') setPassword(event.target.value)
        regexp(event)
    }

    const inputRef = useRef();
    const spanRef = useRef();

    const regexp = (event) => {
        if (event.target.name === 'firstName' || event.target.name === 'lastName') {
            const regexpName = /^[A-Z]+[a-z]+$/g;
            console.log(inputRef.current)
            if (regexpName.test(inputRef.current.value) === false) {
                inputRef.current.style.border = '1px solid red'
                spanRef.current.classList.remove('hide')
            }
            else {
                inputRef.current.style.border = '1px solid green'
                spanRef.current.classList.add('hide')
            }
        }

        if (event.target.name === 'phone') {
            const regexpPhoneNumber = /^\(?(((38)+(063|073|093|097|096|067|099|050))|(063|073|093|097|096|067|099|050))\)?([0-9]{7})$/;
            if (regexpPhoneNumber.test(inputRef.current.value) === false) {
                inputRef.current.style.border = '1px solid red'
                spanRef.current.classList.remove('hide')
            }
            else {
                inputRef.current.style.border = '1px solid green'
                spanRef.current.classList.add('hide')
            }
        }

        if (event.target.name === 'email') {
            const regexpEmail = /^[a-zA-Z]+.+\w+@[a-z]+\.[a-z]{2,3}$/
            if (regexpEmail.test(inputRef.current.value) === false) {
                inputRef.current.style.border = '1px solid red'
                spanRef.current.classList.remove('hide')
            }
            else {
                inputRef.current.style.border = '1px solid green'
                spanRef.current.classList.add('hide')
            }
        }


        // if (event.target.name === 'password') {
        //     const regexpPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])([a-zA-Z0-9!@#$%^&*?]{8,})$/
        //     if (regexpPassword.test(inputRef.current.value) === false) {
        //         inputRef.current.style.border = '1px solid red'
        //         spanRef.current.classList.remove('hide')
        //     } else {
        //         inputRef.current.style.border = '1px solid green'
        //         spanRef.current.classList.add('hide')
        //     }
        // }
    }


    return (
        <>
            <label htmlFor={id}>{label}</label>
            <Component
                {...rest}
                id={id}
                type={type}
                disabled={isSubmitting}
                aria-describedby={`${id}Error`}
                onChange={onChange}
                ref={inputRef}
            />
            <span id={`${id}Error`}  className='hide' ref={spanRef}>required</span>
        </>
    );
};

const useFormFieldComponent = type => {
    switch (type) {
        case 'password':
            return PasswordInput;
        case 'confirmPassword':
            return ConfirmPasswordInput
        case 'select':
            return Select
        case 'checkboxes':
            return CheckboxesInputs
        case 'radio':
            return RadioButton
        default:
            return Input;
    }
}

export default FormField;
