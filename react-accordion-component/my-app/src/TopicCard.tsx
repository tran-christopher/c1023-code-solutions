type Topic = {
  id: number;
  title: string;
  content: string;
};

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.content}</p>
    </div>
  );
}
