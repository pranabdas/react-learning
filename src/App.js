import { useState } from "react";

const fib = (num) => num <= 2 ? 1 : fib(num - 1) + fib(num - 2);

function App() {
  const [isBusy, setIsBusy] = useState(false);

  const handleClick = () => {
    let num = 44;
    const myWorker = new Worker(new URL('./worker.js', import.meta.url));

    // const myWorker = new Worker("/worker.js");
    // `worker.js` should be placed in the public dir

    myWorker.postMessage(num);

    myWorker.onmessage = (e) => {
      console.log("Result =", e.data[0], "(time taken =", e.data[1], "ms)");
      myWorker.terminate();
      setIsBusy(false);
    }
  }

  const handleClickMain = () => {
    let num = 44;
    let t0 = performance.now();
    const result = fib(num);
    const timeTaken = performance.now() - t0;

    console.log("Result =", result, "(time taken =", timeTaken, "ms)");
    setIsBusy(false);
  }

  return (
    <>
      <p>Please open the console to see results.</p>
      <button onClick={() => { setIsBusy(true); handleClick(); }}>Calculate on worker thread</button>

      <button onClick={() => { setIsBusy(true); handleClickMain(); }}>Calculate on main thread</button>

      {isBusy && <p>Working...</p>}
    </>
  );
}

export default App;
