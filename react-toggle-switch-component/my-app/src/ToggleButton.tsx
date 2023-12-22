import { useState } from 'react';
import './ToggleButton.css';

export function ToggleButton() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
    const slider = document.querySelector('#slider');
    slider?.className === 'slider-on'
      ? (slider.className = 'slider-off')
      : (slider.className = 'slider-on');
  }

  return (
    <>
      <div id="slider" className="slider-on"></div>
      <button
        onClick={handleToggle}
        style={{
          backgroundColor: toggle ? 'green' : 'red',
        }}></button>
      <p>{toggle ? 'On' : 'Off'}</p>
    </>
  );
}
