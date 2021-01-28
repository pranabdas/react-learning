import React from 'react';

function App() {

  const [show, setShow] = React.useState(false);

  return(
    <>
      <h1>Show/hide elements</h1>
      <button onClick={() => {setShow(!show)}}>Show/hide</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = React.useState(window.innerWidth);

  const getSize = () => {
    setSize(window.innerWidth);
  }; 

  React.useEffect(() => {
    window.addEventListener('resize', getSize);
    return () => {
      window.removeEventListener('resize', getSize);
    }
  }, []);

  return (
    <>
      <h1>Window size</h1>
      <h2>{size}px</h2>
    </>
  )
}

export default App
