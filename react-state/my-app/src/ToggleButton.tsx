import { useState } from 'react';

type ToggleButtonProps = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: ToggleButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          color: 'black',
          backgroundColor: isClicked === true ? color : 'white',
        }}>
        {isClicked === true ? text : 'Please click me'}
      </button>
    </div>
  );
}
