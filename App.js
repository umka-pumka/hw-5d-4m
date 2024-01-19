import React, { useState } from 'react';

const ClickerApp = () => {
  const [count, setCount] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    if (!isRunning) {
      const start = new Date().getTime();
      setTimer(
        setInterval(() => {
          setMilliseconds(new Date().getTime() - start);
        }, 1)
      );
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timer);
      setIsRunning(false);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
    setMilliseconds(0);
  };

  return (
    <div>
      <h1>Clicker App</h1>
      <h2>Count: {count}</h2>
      <h3>Milliseconds: {milliseconds}</h3>
      <button onClick={incrementCount}>Click</button>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default ClickerApp;

