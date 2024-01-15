import './App.css';
import { ToggleButton } from './ToggleButton';

function App() {
  const exampleObject = {
    color: 'red',
    text: 'Jello',
  };

  return <ToggleButton color={exampleObject.color} text={exampleObject.text} />;
}

export default App;
