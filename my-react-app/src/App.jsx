import React from 'react';

const eventHandler = () => {
    alert("Hello from event handler.");
}

function App() {
    return(
      <>
        <h1>Event Handler</h1>
        <button onClick={eventHandler}>Click me</button>
      </>
    )
  }

export default App
