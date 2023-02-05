import React, { useState, useRef } from 'react';
import Eye from '../../icons/eye.svg'
import EyeSlash from '../../icons/eye-slash.svg'


export const PasswordInput =({...rest}) => {
    const icon = useRef()
    const [showPassword, setShowPassword] = useState(false);

    if (icon.current !== undefined) {
        if (showPassword === false) icon.current.style.backgroundImage = `url(${EyeSlash})`
        else icon.current.style.backgroundImage = `url(${Eye})`
    }


    return (
        <>
            <div className='PasswordInput'>
                <input{...rest}
                      type={showPassword ? 'text' : 'password'}
                />
                <button
                    type='button'
                    ref={icon}
                    className='PasswordInput__btn'
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label='toggle show password'
                >
                </button>
            </div>
        </>
    );
};