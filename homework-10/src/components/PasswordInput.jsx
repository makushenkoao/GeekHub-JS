import React, {useState, useRef} from 'react';
import Eye from '../icons/eye.svg'
import EyeSlash from '../icons/eye-slash.svg'


const PasswordInput = React.forwardRef(({...rest},ref) => {
    const icon = useRef()
    const [showPassword, setShowPassword] = useState(false);

    if (icon.current !== undefined) {
        if (showPassword === false) icon.current.style.backgroundImage = `url(${EyeSlash})`
        else icon.current.style.backgroundImage = `url(${Eye})`
    }


    return (
        <>
            <div className='input-password'>
                <input{...rest}
                      type={showPassword ? 'text' : 'password'}
                      ref={ref}
                />
                <button
                    type='button'
                    ref={icon}
                    className='icon-btn'
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label='toggle show password'
                >
                </button>
            </div>
        </>
    );
});

export default PasswordInput;
