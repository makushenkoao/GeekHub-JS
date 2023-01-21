import React from 'react';

const AverageColor = ({averageColor: {red, green, blue}}) => {
    console.log(green)
    return (
        <div
            className='average-color'
        >
            Average color: rgb({red}, {green}, {blue})
        </div>
    );
};

export default AverageColor;