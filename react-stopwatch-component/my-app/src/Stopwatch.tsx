import { useState } from 'react';

export function Stopwatch() {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);

  function handlePlay() {
    setClick(!click);
    setCount((count) => count + 1);
  }

  function handlePause() {
    setClick(!click);
  }

  return (
    <>
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={click ? { handlePlay } : { handlePause }}>Play</button>
      </div>
    </>
  );
}
