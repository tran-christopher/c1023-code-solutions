type Image = {
  src: string;
  alt: string;
};

export function Banner({ src, alt }: Image) {
  return (
    <img
      style={{
        width: '25%',
        color: 'black',
        fontSize: '48px',
        marginBottom: '10px',
        marginTop: '5px',
      }}
      src={src}
      alt={alt}
    />
  );
}
