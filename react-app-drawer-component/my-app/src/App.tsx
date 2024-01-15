import { useState } from 'react';
import './App.css';
import { AppDrawer } from './AppDrawer';

const menuItems = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild',
];

function App() {
  const [item, setItem] = useState('No menu selected');

  return (
    <div>
      <AppDrawer header="Choose a Game" items={menuItems} onSelect={setItem} />
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
        }}>
        {item}
      </h1>
    </div>
  );
}

export default App;
