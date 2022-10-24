import React, { useState } from 'react';
import '../styles/square.css'

const SquareComponent = () => {

    const [squareColor, setsquareColor] = useState('#000000');
    const [manageInterval, setManageInterval] = useState(0);
    
    function randomNumber() {
        return Math.floor(Math.random() * 256);
    }

    function randomColor() {
        const newColor = {
            r: randomNumber(),
            g: randomNumber(),
            b: randomNumber(),
        };
        setsquareColor(`rgb(${newColor.r},${newColor.g},${newColor.b}`);
    }

    const changeColor = () => {
        return setManageInterval(setInterval(randomColor,500));
    }

    const stopColor = () => {
        return clearInterval(manageInterval);
    }

    const clickColor = () => {
        return clearInterval(manageInterval);
    }

    return (
        <div className='square' style={ { backgroundColor: squareColor } } 
            onMouseOver= { changeColor }
            onMouseLeave= { stopColor }
            onDoubleClick= { clickColor }>
        </div>
    );
}

export default SquareComponent;
