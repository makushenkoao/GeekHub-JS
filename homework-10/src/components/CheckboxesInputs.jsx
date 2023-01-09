import React from 'react';

const CheckboxesInput = React.forwardRef((props,ref) => {
    return (
        <>
            {[props][0].options.map((item,index) => {
                return (
                    <div key={index}>
                        <input value={item.value} {...props} required={false} type='checkbox' />
                        <label>{item.label}</label>
                    </div>
                )})}
        </>
    );
});

export default CheckboxesInput;

