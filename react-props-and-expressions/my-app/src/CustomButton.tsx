type Props = {
  text: string;
  className: string;
};

export function CustomButton({ text, className }: Props) {
  return <button className={className}>{text}</button>;
}
