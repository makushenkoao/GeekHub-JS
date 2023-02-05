import React from 'react';

export const Select = ({
    ...rest
}) => {
    return (
        <div>
            <select
                {...rest}
            >
                {{...rest}.options.map((item,index)=><option key={index} value={item.value}>{item.value}</option>)}
            </select>
        </div>
    );
};
