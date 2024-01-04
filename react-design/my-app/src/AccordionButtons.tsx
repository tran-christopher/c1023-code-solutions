type Count = {
  count: number;
};

export function AccordionButtons({ count }: Count) {
  return (
    <div
      style={{
        marginRight: '35px',
        marginLeft: '35px',
      }}>
      <button
        style={{
          backgroundColor: count === 0 ? 'red' : '',
        }}>
        0
      </button>
      <button
        style={{
          backgroundColor: count === 1 ? 'red' : '',
        }}>
        1
      </button>
      <button
        style={{
          backgroundColor: count === 2 ? 'red' : '',
        }}>
        2
      </button>
      <button
        style={{
          backgroundColor: count === 3 ? 'red' : '',
        }}>
        3
      </button>
      <button
        style={{
          backgroundColor: count === 4 ? 'red' : '',
        }}>
        4
      </button>
      <button
        style={{
          backgroundColor: count === 5 ? 'red' : '',
        }}>
        5
      </button>
    </div>
  );
}
