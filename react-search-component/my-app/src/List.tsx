import './List.css';

type listProps = {
  list: string[];
  word: string;
};

export function List({ list, word }: listProps) {
  const newList = [];
  let check;
  for (let i = 0; i < list.length; i++) {
    if (list[i].toLowerCase().includes(word.toLowerCase())) {
      check = true;
      break;
    } else {
      check = false;
    }
  }
  for (let i = 0; i < list.length; i++) {
    newList.push(
      <li
        className={
          !word
            ? ''
            : list[i].toLowerCase().includes(word.toLowerCase())
            ? ''
            : 'hidden'
        }
        key={i}
        style={{
          textAlign: 'left',
        }}>
        {list[i]}
      </li>
    );
  }
  return (
    <div>
      <ul>
        {newList}
        <li
          style={{
            textAlign: 'left',
          }}
          className={!check ? '' : 'hidden'}>
          No items match the filter
        </li>
      </ul>
    </div>
  );
}
