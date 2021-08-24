import React, { useState } from 'react';
import './counter-button.scss';

const CounterButton = ({ title, toggleTitle, count }) => {
    const [displayCount, toggleDisplayCount] = useState(count);
    const [displayTitle, setDisplayTitle] = useState(title);
    const handleClick = () => {
        toggleDisplayCount((prevCount) => {
            return prevCount === count ? prevCount + 1 : prevCount - 1;
        });
        setDisplayTitle((prevTitle) => {
            return prevTitle === title ? toggleTitle : title;
        });
    };
    return (
        <div>
            <button className="button__title" onClick={handleClick}>{displayTitle}</button>
            <span className="button__value">{displayCount}</span>
        </div>
    );
};

export default CounterButton;
