import React,{useState,useEffect} from 'react';
import Background from '../Background/Background';
import AverageColor from '../AverageColor/AverageColor';
import DominantColor from '../DominantColor/DominantColor';

const getRandomInt = (min,max) => Math.floor(Math.random() * (max - min)) + min;
const GREEN = 'Green';
const RED = 'Red';
const BLUE = 'Blue';
const EQUAL = 'all color are equal';

export const Palette = () => {
    const [rgbColor, setRgbColor] = useState({
        red: 127,
        green: 127,
        blue: 127
    });
    const [colorList, setColorList] = useState([rgbColor])
    const [averageColor, setAverageColor] = useState(rgbColor);
    const [dominantColor, setDominantColor] = useState(EQUAL);
    const [clicksCounter, setClicksCounter] = useState(1);

    const changeBackgroundColor = () => {
        const newColor = {
            red: getRandomInt(0, 255),
            green: getRandomInt(0, 255),
            blue: getRandomInt(0, 255),
        }
        setRgbColor(newColor)
        setClicksCounter(prevState => prevState + 1);
        setColorList(prevState => [...prevState, newColor])
    };

    useEffect(() => {
        const averageColorSum = {
            red: 0,
            green: 0,
            blue: 0
        }
        colorList.forEach(({red, blue, green}) => {
            averageColorSum.red += red
            averageColorSum.green += green
            averageColorSum.blue += blue
        })

        const { red, green, blue } = averageColorSum;

        setAverageColor(({
            red : Math.floor(red / clicksCounter),
            green : Math.floor(green / clicksCounter),
            blue : Math.floor(blue / clicksCounter)
        }))
    }, [rgbColor, clicksCounter]);

    useEffect(() => {
        const { red, green, blue } = rgbColor;

        const isRed = red > (green + blue) / 2
        const isBlue = blue > (red + green) / 2
        const isGreen = green > (red + blue) / 2

        if (isRed && !(isGreen || isBlue)) {
            setDominantColor(RED);
        } else if (isBlue && !(isGreen || isRed)) {
            setDominantColor(GREEN);
        } else if (isGreen && !(isRed || isBlue)) {
            setDominantColor(BLUE);
        } else {
            setDominantColor(EQUAL);
        }

    }, [rgbColor]);

    return (
        <>
            <Background changeBackgroundColor={changeBackgroundColor} color={rgbColor}/>
            <AverageColor averageColor={averageColor} />
            <DominantColor dominantColor={dominantColor}/>
        </>
    );
};


// import Background from "./Background";
// import AverageColor from "./AverageColor";
// import DominantColor from "./DominantColor";
// import React, {useEffect, useState} from "react";
//
// const mediumColor = {
//     red: 0,
//     green: 0,
//     blue: 0
// }
//
// function Palette() {
//
//     const [color, setColor] = useState({
//         red: 127,
//         green: 127,
//         blue: 127
//     });
//     const [dominantColor, setDominantColor] = useState('All colors are equal');
//     const [averageColor, setAverageColor] = useState([]);
//
//
//     function randomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//
//     function randomColor() {
//         setColor({
//             red: randomInt(0, 255),
//             green: randomInt(0, 255),
//             blue: randomInt(0, 255)
//         })
//
//         setAverageColor([...averageColor, color])
//     }
//
//     useEffect(() => {
//         if (color.red > (color.blue + color.green) / 2) return setDominantColor('red');
//         else if (color.green > (color.blue + color.red) / 2) return setDominantColor('green');
//         else if (color.blue > (color.red + color.green) / 2) return setDominantColor('blue');
//     }, [color]);
//
//     let averageResult;
//     function getAverageColor(state) {
//
//
//         if(averageColor.length) {
//             const red = averageColor.reduce((prev, cur) => prev + cur.red, 0) / averageColor.length;
//             const green = averageColor.reduce((prev, cur) => prev + cur.green, 0) / averageColor.length;
//             const blue = averageColor.reduce((prev, cur) => prev + cur.blue, 0) / averageColor.length;
//             averageResult = rgb (${Number (red) . toFixed()}, ${Number (green) . toFixed()}, ${Number (blue) . toFixed()})
//         }
//     }
// getAverageColor()
//
//  console.log(averageResult)
//
//     return (
//         <>
//             <AverageColor average={averageResult}/>
//             <Background changeBgColor={randomColor} rgbColor={color} startColor={color}/>
//             <DominantColor dominant={dominantColor}/>
//         </>
//     );
// }
//
// export default Palette;



// ME


// const [rgbColor, setRgbColor] = useState({
//     red: 127,
//     green: 127,
//     blue: 127
// });
// const [averageColor, setAverageColor] = useState();
// const [dominantColor, setDominantColor] = useState();
// const [divider, setDivider] = useState(1);
//
// const changeBackgroundColor = () => {
//     setRgbColor({
//         red: getRandomInt(0, 255),
//         green: getRandomInt(0, 255),
//         blue: getRandomInt(0, 255),
//     })
//     setDivider(divider+1);
// };
//
// useEffect(() => {
//     if (rgbColor.red > (rgbColor.green + rgbColor.blue) / 2) {
//         setDominantColor('red');
//     } else if (rgbColor.green > (rgbColor.red + rgbColor.blue) / 2) {
//         setDominantColor('green');
//     } else if (rgbColor.blue > (rgbColor.red + rgbColor.green) / 2) {
//         setDominantColor('blue');
//     } else {
//         setDominantColor('all color are equal');
//     }
//
//     const redRgb = Math.floor((mediumColor.red += rgbColor.red)/divider);
//     const greenRgb = Math.floor((mediumColor.green += rgbColor.green)/divider);
//     const blueRgb = Math.floor((mediumColor.blue += rgbColor.blue)/divider);
//
//     setAverageColor(`rgb(${redRgb} ${greenRgb} ${blueRgb})`);
// }, [rgbColor]);
//
// return (
//     <>
//         <Background changeBackgroundColor={changeBackgroundColor} color={rgbColor}/>
//         <AverageColor averageColor={averageColor} />
//         <DominantColor dominantColor={dominantColor}/>
//     </>
// );