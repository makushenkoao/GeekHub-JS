import React,{useState} from 'react';
import './../../App.css';
import Background from './../Background/Background';
import AverageColor from './../AverageColor/AverageColor';
import DominantColor from './../DominantColor/DominantColor'

const rgbColor = {
    red: 127,
    green: 127,
    blue: 127
};

const mediumColor = {
    red: 127,
    green: 127,
    blue: 127
};

let redRgb, greenRgb, blueRgb

const Palette = () => {
    const [rgb, setRgb] = useState();
    const [count, setCount] = useState(0);

    const randomInt = (min,max) => Math.floor(Math.random() * (max - min)) + min;

    const changeBackgroundColor = () => {
        rgbColor.red = randomInt(0, 255);
        rgbColor.green = randomInt(0, 255)
        rgbColor.blue = randomInt(0, 255)
        let currentCount = count;
        setRgb(rgbColor)
        currentCount++;
        setCount(currentCount);
    }

    if (rgb !== undefined) {
        const divider = count + 1;
        redRgb = Math.floor((mediumColor.red += rgb.red)/divider)
        greenRgb = Math.floor((mediumColor.green += rgb.green)/divider)
        blueRgb = Math.floor((mediumColor.blue += rgb.blue)/divider)
    }

    return (
        <>
            <Background startColor={rgbColor} color={rgb} changeColorFunc={changeBackgroundColor} />
            <AverageColor red={redRgb} green={greenRgb} blue={blueRgb} />
            <DominantColor color={rgb}/>
        </>
    );
};

export default Palette;
