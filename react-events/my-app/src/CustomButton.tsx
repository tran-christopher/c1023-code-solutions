import './CustomButton.css';

type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};

export function CustomButton({ text, color, onCustomClick }: Props) {
  // function handleClick() {
  //   window.alert(text);
  // }

  return (
    <button onClick={() => onCustomClick(text)} className={color}>
      {text}
    </button>
  );
}
