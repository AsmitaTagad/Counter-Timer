import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="container">
      <div className="subContainer">
        <h1> {count}</h1>
        <br />
        <div className="btn">
          <button className="btn1" onClick={() => setCount(count + 1)}>
            INC
          </button>
          <button className="btn2" onClick={() => setCount(count - 1)}>
            DEC
          </button>
        </div>
        <div className="timer">
          <h1>{displayTime()}</h1>
        </div>
      </div>
    </div>
  );
}
