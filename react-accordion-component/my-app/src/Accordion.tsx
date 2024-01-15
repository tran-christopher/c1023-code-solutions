import { TopicCard } from './TopicCard';
import { useState } from 'react';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [openedId, setOpenedId] = useState(0);
  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openedId === topic.id}
          onClick={() => setOpenedId(topic.id === openedId ? 0 : topic.id)}
        />
      ))}
    </div>
  );
}
