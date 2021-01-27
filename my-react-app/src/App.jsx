import React, { useState } from 'react';

function App() {

  const [title, setTitle] = useState("Hello React");

  const handleClick = () => {
    (title === "Hello React") ? setTitle("Hello useState") : setTitle("Hello React")
  };

  return(
    <>
      <h1>{title}</h1>
      <button onClick={handleClick}>Change title</button>
    </>
  );
}

export default App
