import React from 'react';

const user = {
  "firstName": "Pranab", 
  "lastName" : "Das"
}

function Welcome(props) {
  return(
    <>
    <h3>React Props (properties)</h3>
    <p>Hello {props.user.firstName} {props.user.lastName}!!</p>
  </>
  );
}

function App() {
    return(
      <Welcome user={user} />
    )
}

export default App
