import React, {useRef} from 'react';

const Input = React.forwardRef(({...rest},ref) => {
    return (
        <>
            <input
                {...rest}
                ref={ref}
                // onInput={()=>{if (ref.current.type === 'checkbox') ref.current.value = ref.current.checked}}
            />
        </>
    );
});

export default Input;
