import { useState } from 'react';
import { AccordionButtons } from './AccordionButtons';
import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrev() {
    if (index === items.length - 1) {
      setIndex(5);
    } else {
      setIndex(index - 1);
    }
  }

  function handleAccordion(clickedIndex: number) {
    setIndex(clickedIndex);
  }

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
      <Banner item={items[index]} />
      <PrevButton onClick={handlePrev} />
      <AccordionButtons onClick={handleAccordion} current={index} />
      <NextButton onClick={handleNext} />
    </div>
  );
}
