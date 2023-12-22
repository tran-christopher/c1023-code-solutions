import { useState } from 'react';
import './HotButton.css';

export function HotButton() {
  const [clicks, setClicks] = useState(0);

  function handleClicks() {
    setClicks(clicks + 1);
  }

  return (
    <button
      onClick={handleClicks}
      style={{
        color: 'black',
        backgroundColor:
          clicks < 3
            ? 'purple'
            : clicks >= 3 && clicks <= 6
            ? 'pink'
            : clicks >= 6 && clicks <= 9
            ? 'orange'
            : clicks >= 9 && clicks <= 12
            ? 'yellow'
            : clicks >= 12 && clicks <= 15
            ? 'red'
            : clicks >= 15 && clicks <= 18
            ? 'brown'
            : 'white',
      }}>
      Hot Button
    </button>
  );
}
