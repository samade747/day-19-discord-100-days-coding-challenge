import React, { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [doubledNumbers, setDoubledNumbers] = useState<number[]>([]);

  const doubleNumbers = () => {
    const doubled = numbers.map((number: number) => number * 2);
    setDoubledNumbers(doubled)
  };

  return (
    <div>
    <h2>Original Number</h2>
    <ul>
      {number.map((number: number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>

        <h2>Display double number</h2>
        <ul>
          {doubleNumbers.map((number: number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>

            <button onClick={doubleNumbers}>Doubel Numbers</button>
  </div>
  )
}

export default App
