import React from 'react';

function App() {

  const [width, setWidth] = React.useState(window.innerWidth);

  const getWidth = () => {
    setWidth(window.innerWidth)
  }

  React.useEffect(() => {
    window.addEventListener('resize', getWidth);

    return () => {
      window.removeEventListener('resize', getWidth);
    }
  });

  return(
    <>
      <h1>Browser width</h1>
      <h4>Width = {width}</h4>
    </>
  );
}

export default App
