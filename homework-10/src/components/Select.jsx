import React from 'react';

const Select = React.forwardRef((props,ref) => {
    return (
        <div>
            <select
                {...props}
            >
                {[props][0].options.map((item,index)=><option key={index} value={item.value}>{item.value}</option>)}
            </select>
        </div>
    );
});

export default Select;
