import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [click, setClick] = useState(true);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handlePlay() {
    setClick(!click);

    if (click) {
      setIntervalId(setInterval(() => setCount((count) => count + 1), 1000));
    } else {
      clearInterval(intervalId);
    }
  }

  return (
    <>
      <div className="timer">
        <p>{count}</p>
      </div>
      <div>
        <button onClick={handlePlay}>{click ? <FaPlay /> : <FaPause />}</button>
      </div>
    </>
  );
}
