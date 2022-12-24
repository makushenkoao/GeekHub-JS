import React from 'react';
import './../../App.css'

const myRef = React.createRef();

const DominantColor = (props) => {

    if (props.color !== undefined) {
        myRef.current.innerHTML = 'All color are equal';
        if (props.color.red > (props.color.green + props.color.blue)) myRef.current.innerHTML = 'dominant color: red';
        if (props.color.green > (props.color.red + props.color.blue)) myRef.current.innerHTML = 'dominant color: green';
        if (props.color.blue > (props.color.red + props.color.green)) myRef.current.innerHTML = 'dominant color: blue';
    }

    return (
        <>
            <div className="dominant-color" ref={myRef}>Dominant</div>
        </>
    );
};

export default DominantColor;
