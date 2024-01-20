import { FaCircle } from 'react-icons/fa6';

type AccordionButtonsProp = {
  current: number;
  onClick: (index: number) => void;
};

export function Indicators({ current, onClick }: AccordionButtonsProp) {
  function handleButtonClick(index: number) {
    onClick(index);
  }

  return (
    <div
      style={{
        marginRight: '35px',
        marginLeft: '35px',
      }}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <FaCircle
          key={index}
          onClick={() => handleButtonClick(index)}
          style={{
            color: current === index ? 'black' : '',
          }}
        />
      ))}
    </div>
  );
}
