import React from 'react';

export const RadioButton = ({
    onChange,
    onError,
    required,
    ...rest
}) => {
    return (
        <>
            {
                {...rest}.options.map((item,index) => {
                    return (
                        <div key={index}>
                            <input defaultChecked={rest.defaultChecked} value={item.value} {...rest}/>
                            <label>{item.label}</label>
                        </div>

                    )
                })
            }
        </>
    );
};
