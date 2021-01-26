import React from 'react';

const user = {
    "firstName": "Pranab", 
    "lastName" : "Das"
}

function App() {
    return(
      <>
        <h1>React App</h1>
        <p>Hello {user.firstName} {user.lastName}!</p>
      </>
    )
  }

export default App
