import React, { useRef } from 'react';
import { Form, FormField, FormSubmit } from "..";

export const LoginPasswordForm = () => {
    const formRef = useRef();

    const onSubmit = values => {
        console.log('password values', values);
    }

    return (
        <div className='Form'>
            <h1>Login Password Form</h1>
            <Form onSubmit={onSubmit} ref={formRef} >
                {() => {
                    return (
                        <>
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
                            <FormSubmit
                                onClick={() => formRef.current.submit()}
                            />
                        </>
                    )
                }}
            </Form>
        </div>
    );
};
