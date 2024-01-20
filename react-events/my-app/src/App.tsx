import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  const [count, setCount] = useState(0);
  function handleCustomClick(text: string) {
    alert(text);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Is this working?"
        color="firstButton"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Helloooooooo?"
        color="secondButton"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Answer meeee!!"
        color="thirdButton"
      />
    </>
  );
}

export default App;
