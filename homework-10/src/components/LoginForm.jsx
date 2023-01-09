import React, {useRef, useState} from 'react';

import Form from './Form'
import FormField from './FormField'

const LoginForm = (props) => {
    const [isGroupAccount, setIsGroupAccount] = useState(false);

    const onSubmit = values => {
        console.log('values', values)
    }

    const formRef = useRef()

    return (
        <div className='wrapper'>
            <h1>Login Form</h1>
            <FormField
                    type="checkbox"
                    name="switch"
                    label="switch to group account"
                    onClick={() => setIsGroupAccount(!isGroupAccount)}
                />
            <Form ref={formRef} onSubmit={onSubmit}>
                    {isGroupAccount ? (
                        <FormField
                            required
                            type="text"
                            name="title"
                            label="Title"
                        />
                    ) : (
                        <>
                            <FormField
                                required
                                type="name"
                                name="firstName"
                                label="First Name"
                                placeholder="John"
                            />
                            <FormField
                                required
                                type="name"
                                name="lastName"
                                label="Last Name"
                                placeholder="Smite"
                            />
                        </>
                    )}
                    <FormField
                        required
                        label='Email'
                        name='email'
                        type='email'
                        placeholder="Type here..."
                    />
                    <FormField
                        required
                        type="phone"
                        name="phone"
                        label="Phone"
                        placeholder="Type here..."
                    />
                    <FormField
                        required
                        type="select"
                        name="gender"
                        label="Gender"
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Unspecified or Non binary' }
                        ]}
                    />
                    <FormField
                        required
                        type="radio"
                        name="prefer"
                        label="What do you prefer?"
                        defaultChecked="cola"
                        options={[
                            { value: 'pepsi', label: 'Pepsi' },
                            { value: 'cola', label: 'Cola' }
                        ]}

                    />
                    <FormField
                        required
                        type="checkboxes"
                        name="race"
                        label="Your race?"
                        options={[
                            { value: 'unspecified', label: 'Not Reported' },
                            { value: 'preferUnspecified', label: 'Prefer not to answer' },
                            { value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE', label: 'American Indian or Alaska Native' },
                            { value: 'ASIAN', label: 'Asian' },
                            { value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American' },
                            { value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER', label: 'Native Hawaiian or Other Pacific Islander' },
                            { value: 'WHITE', label: 'White' }
                        ]}
                    />
                    <FormField
                        required
                        name="consent"
                        type="checkbox"
                        label={(
                            <>
                                By checking this box, I agree to the <a href="src/components/LoginForm#">Terms of Use</a> and <a href="src/components/LoginForm#">Privacy Policy</a>.
                            </>
                        )}
                        className='checkbox'
                    />
                    <FormField
                        required
                        type="password"
                        name="password"
                        label="Password"
                    />
                    <FormField
                        required
                        type="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                    />
            </Form>
            <button
                onClick={()=>{
                    formRef.current.submit()
                }}
            >
                Submit
            </button>
        </div>
    );
};

export default LoginForm;