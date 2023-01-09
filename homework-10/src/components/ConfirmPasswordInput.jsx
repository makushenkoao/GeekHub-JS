import React, {useState, useRef, useId} from 'react';
import Eye from '../icons/eye.svg'
import EyeSlash from '../icons/eye-slash.svg'

const ConfirmPasswordInput = React.forwardRef((props, ref) => {
    const icon = useRef()

    const [showPassword, setShowPassword] = useState(false);

    if (icon.current !== undefined) {
        if(showPassword === false) icon.current.style.backgroundImage = `url(${EyeSlash})`
        else icon.current.style.backgroundImage = `url(${Eye})`
    }

    return (
        <>
            <div className='input-password'>
                <input {...props}  type={showPassword ? 'text' : 'password'} ref={ref} />
                <button
                    type='button'
                    ref={icon}
                    className='icon-btn'
                    onClick={()=> setShowPassword(!showPassword)}
                    aria-label='toggle show password'
                >
                </button>
            </div>
            {/*<span id={`${fieldId}Error`}>{error}</span>*/}
        </>
    );
});

export default ConfirmPasswordInput;
