import React from 'react';

function App() {

  const [value, setValue] = React.useState(0);

  return(
    <>
      <h1>Counter</h1>
      <h4>{value}</h4>
      <button onClick={() => setValue(value+1)}>Increase</button>
      <button onClick={() => setValue(0)}>Reset</button>
    </>
  );
}

export default App
