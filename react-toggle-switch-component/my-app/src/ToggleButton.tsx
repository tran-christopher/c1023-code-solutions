import { useState } from 'react';
import './ToggleButton.css';

export function ToggleButton() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      <div id="slider" className={toggle ? 'slider-on' : 'slider-off'}></div>
      <button
        onClick={handleToggle}
        style={{
          backgroundColor: toggle ? 'green' : 'red',
        }}></button>
      <p>{toggle ? 'On' : 'Off'}</p>
    </>
  );
}
