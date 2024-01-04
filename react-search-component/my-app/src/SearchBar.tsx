import React from 'react';

type SearchBarProps = {
  OnType: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ OnType }: SearchBarProps) {
  return (
    <div>
      <input
        onChange={OnType}
        style={{
          width: '100%',
          borderRadius: '15px',
          padding: '5px 5px 5px 25px',
        }}
        type="text"
        placeholder="search"
      />
    </div>
  );
}
