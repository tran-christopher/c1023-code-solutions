type NextButtonProp = {
  onClick: () => void;
};

export function NextButton({ onClick }: NextButtonProp) {
  return (
    <button
      onClick={onClick}
      style={{
        marginBottom: '35px',
      }}>
      Next
    </button>
  );
}
