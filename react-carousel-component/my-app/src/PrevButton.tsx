import { IoIosArrowBack } from 'react-icons/io';

type PrevButtonProp = {
  onClick: () => void;
};

export function PrevButton({ onClick }: PrevButtonProp) {
  return <IoIosArrowBack color="black" size={50} onClick={onClick} />;
}
