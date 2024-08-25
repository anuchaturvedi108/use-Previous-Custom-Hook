import { useState } from 'react';
import { usePrevious } from './customHook/usePrevious';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2>Current Count : {count}</h2>
      <h3>Previous Count : {prevCount}</h3>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default App;
