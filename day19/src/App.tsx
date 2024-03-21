// @ts-ignore
import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [doubledNumbers, setDoubledNumbers] = useState<number[]>([]);

  const doubleNumbers = () => {
    const doubled = numbers.map((num: number) => num * 2);
    setDoubledNumbers(doubled);
  };

  return (
    <div>
      <h2>Original Numbers</h2>
      <ul>
        {numbers.map((num: number) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <h2>Doubled Numbers</h2>
      <ul>
        {doubledNumbers.map((num: number) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <button onClick={doubleNumbers}>Double Numbers</button>
    </div>
  );
}

export default App;
