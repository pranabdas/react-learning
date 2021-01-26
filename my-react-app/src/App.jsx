import React, { useState } from 'react';

function App() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [total, setTotal] = useState(input1 + input2);

    function add() {
        setTotal(input1 + input2)
    }

    return(
    <>
        <h3>Adding two numbers</h3>
        <input 
            type="number"
            value={input1}
            onChange={e => setInput1(+e.target.value)}
            placeholder="0"
        />
        <input 
            type="number"
            value={input2}
            onChange={e => setInput2(+e.target.value)}
            placeholder="0"
        />
        <button onClick={add}>Add</button>
        <p>{total}</p>
      </>
    )
  }

export default App
