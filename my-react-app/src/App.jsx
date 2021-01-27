import React from 'react';

function App() {

  const [item, setItem] = React.useState({
    name: "Pranab", 
    message: "Hello!"
  });

  const changeMessage = () => {
    setItem({ ...item, message: "How are you?"})
  };

  return(
    <>
      <h1>{item.name}</h1>
      <p>{item.message}</p>
      <button onClick={changeMessage}>Change message</button>
    </>
  );
}

export default App
