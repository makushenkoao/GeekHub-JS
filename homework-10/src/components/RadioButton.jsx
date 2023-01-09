import React from 'react';

const RadioButton = React.forwardRef((props,ref) => {
    return (
        <>
            {
                [props][0].options.map((item,index) => {
                    return (
                        <div key={index}>
                            <input defaultChecked={props.defaultChecked} value={item.value} {...props}/>
                            <label>{item.label}</label>
                        </div>

                    )
                })
            }
            {/*<span id={`${fieldId}Error`}>{error}</span>*/}
        </>
    );
});

export default RadioButton;
