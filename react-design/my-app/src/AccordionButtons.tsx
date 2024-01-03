type Count = {
  index: number;
};

export function AccordionButtons({ index }: Count) {
  return (
    <div
      style={{
        marginRight: '35px',
        marginLeft: '35px',
      }}>
      {/* placeholder to commit */}
      <button>{index}</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}
