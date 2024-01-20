type Topic = {
  id: number;
  title: string;
  content: string;
};

type CardProps = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};
export function TopicCard({ topic, isOpen, onClick }: CardProps) {
  return (
    <div className="topic">
      <div onClick={onClick} className="topic-title">
        <h3>{topic.title}</h3>
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}
