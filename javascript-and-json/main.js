const books = [
  {
    isbn: '034553980X',
    title: 'Red Rising',
    author: 'Pierce Brown',
  },
  {
    isbn: '0345539834',
    title: 'Golden Son',
    author: 'Pierce Brown',
  },
  {
    isbn: '0345539869',
    title: 'Morning Star',
    author: 'Pierce Brown',
  },
];

console.log('array of books:', books);
console.log('type of array:', typeof books);

const changedObject = JSON.stringify(books);
console.log('array after stringify:', changedObject);
console.log('type after stringify:', typeof changedObject);

const jsonString = '{"numberId":123,"stringName":"test"}';
console.log('JSON string:', jsonString);
console.log('type of JSON string:', typeof jsonString);

const parsedJson = JSON.parse(jsonString);
console.log('parsed JSON:', parsedJson);
console.log('type of parsed JSON', typeof parsedJson);
