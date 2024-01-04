// import { useState } from 'react';
import { AccordionButtons } from './AccordionButtons';
import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // const [index, setIndex] = useState(0);

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
      <AccordionButtons count={0} />
      <NextButton />
    </div>
  );
}
