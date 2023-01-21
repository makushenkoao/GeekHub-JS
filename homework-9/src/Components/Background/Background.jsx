import React from 'react';

const Background = (props) => {
    return (
        <div
            className='background'
            onClick={props.changeBackgroundColor}
            style={{background: `rgb(${props.color.red} ${props.color.blue} ${props.color.green})`}}
        >
        </div>
    );
};

export default Background;
