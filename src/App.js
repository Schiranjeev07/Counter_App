
import './App.css';
import { useState } from 'react';
import Buttons from './Button';

function App() {
  const[count, setcount] = useState(0);
  return (
    <>
    <h1>Counter App</h1>
    <h2 defaultValue={0}>{count}</h2>
    {/* <button onClick={() => setcount(count+1)}>Increase</button>
    <button onClick={() => setcount(count-1)}>Decrease</button>
    <button onClick={() => setcount(count*2)}>Multiply by 2</button>
    <button onClick={() => setcount(Math.floor(count/2))}>Divide by 2</button> */}

    <Buttons setcount={setcount} count={count} />
    </>
  );
}

export default App;
