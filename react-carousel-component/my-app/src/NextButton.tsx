import { IoIosArrowForward } from 'react-icons/io';

type NextButtonProp = {
  onClick: () => void;
};

export function NextButton({ onClick }: NextButtonProp) {
  return <IoIosArrowForward color="black" size={50} onClick={onClick} />;
}
