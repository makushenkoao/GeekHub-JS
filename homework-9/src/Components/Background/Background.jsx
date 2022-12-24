import React from 'react';
import './../../App.css'

const Background = (props) => {
    return (
        <div className='background' onClick={props.changeColorFunc} style={{background: `rgb(${props.startColor.red} ${props.startColor.green} ${props.startColor.blue})`}}></div>
    );
};

export default Background;
