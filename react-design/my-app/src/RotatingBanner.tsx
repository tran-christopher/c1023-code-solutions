import { AccordionButtons } from './AccordionButtons';
import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <div
      style={{
        backgroundColor: 'white',
      }}>
      <h1
        style={{
          height: '10vh',
          width: '100%',
          backgroundColor: '#0125A7',
          marginBottom: '5px',
        }}></h1>
      <Banner item={items[0]} />
      <PrevButton />
      <AccordionButtons />
      <NextButton />
    </div>
  );
}
