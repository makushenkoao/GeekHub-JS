import React from 'react';

const DominantColor = (props) => {

    return (
        <>
            <div className="dominant-color">
                Dominant color: {props.dominantColor}
            </div>
        </>
    );
};

export default DominantColor;
