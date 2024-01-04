type Name = {
  item: string;
};

export function Banner({ item }: Name) {
  return (
    <p
      style={{
        color: 'black',
        fontSize: '48px',
        marginBottom: '10px',
        marginTop: '5px',
      }}>
      {item}
    </p>
  );
}
