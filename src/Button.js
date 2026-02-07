import { useState } from 'react';

const Buttons=({setcount, count}) =>{
  
  return (
    <>
    <button onClick={() => setcount(count+1)}>Increase</button>
    <button onClick={() => setcount(count-1)}>Decrease</button>
    <button onClick={() => setcount(count*2)}>Multiply by 2</button>
    <button onClick={() => setcount(Math.floor(count/2))}>Divide by 2</button>
    </>
  );
}

export default Buttons;
