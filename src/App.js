import React, {useState, useEffect, useRef} from 'react';
import balloonImg from './assets/balloon.svg'
import balloonSound from './assets/balloon_sound.mp3'
import './App.css'

export const App = () => {
    const [balloons, setBalloons] = useState([]);
    const [count, setCount] = useState(0);
    const audioRef = useRef()

    useEffect(() => {
        alert(
            'Collect 30 popped balloons. To burst the balloon, click on it, you will lose if there are more than 5 balloons on the page'
        )
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const xPos = Math.random() * window.innerWidth;
            const yPos = Math.random() * window.innerHeight
            let newBalloon = { x: xPos, y: yPos};
            setBalloons([...balloons, newBalloon]);
        }, 500);
        return () => clearInterval(interval);
    }, [balloons]);

    useEffect(() => {
        if (count === 30) {
            setBalloons([])
            setCount(0)
            alert('You win');

        }
        if (balloons.length > 5) {
            setBalloons([])
            setCount(0)
            alert('You lose')
        }
    }, [balloons])

    const handleClick = e => {
        if (e.target && e.target.dataset && e.target.dataset.balloonId) {
            setBalloons(balloon => balloon.filter((balloon, index) =>
                index !== parseInt(e.target.dataset.balloonId)
            ));
            setCount(count => count + 1);
        }
    };

    return (
        <div id="container" onClick={handleClick}>
            <h1 style={{textAlign: 'center'}}>Number of popped balloons: {count}</h1>
            {balloons && balloons.map((balloon, index) => (
                <img
                    key={index}
                    data-balloon-id={index}
                    style={{
                        top: `${balloon['y']}px`,
                        left: `${balloon['x']}px`,
                    }}
                    src={balloonImg}
                    alt='balloon'
                    draggable={false}
                    className='balloon'
                    onClick={() => audioRef.current.play()}
                />
            ))}
            <audio  src={balloonSound} ref={audioRef}/>
        </div>
    );
};
