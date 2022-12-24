import React from 'react';
import './../../App.css'

let myRef = React.createRef()

const AverageColor = (props) => {
    if (props.red !== undefined && props.green !== undefined && props.blue !== undefined) myRef.current.innerHTML = `average color: rgb(${props.red} ${props.green} ${props.blue})`

    return (
        <div className='average-color' style={{background: `rgb(${props.red} ${props.green} ${props.blue})`}} ref={myRef}>Average</div>
    );
};

export default AverageColor;