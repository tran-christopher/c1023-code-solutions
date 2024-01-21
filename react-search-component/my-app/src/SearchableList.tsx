import { useState } from 'react';
import { List } from './List';
import { SearchBar } from './SearchBar';

type Array = {
  list: string[];
};

export function SearchableList({ list }: Array) {
  const [input, setInput] = useState('');

  return (
    <div>
      <SearchBar
        OnType={(e) => {
          setInput(e.target.value);
        }}
      />
      <List list={list} word={input} />
    </div>
  );
}
