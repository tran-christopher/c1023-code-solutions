type AccordionButtonsProp = {
  current: number;
  onClick: (index: number) => void;
};

export function AccordionButtons({ current, onClick }: AccordionButtonsProp) {
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
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          style={{
            backgroundColor: current === index ? 'red' : '',
          }}>
          {index}
        </button>
      ))}
    </div>
  );
}
