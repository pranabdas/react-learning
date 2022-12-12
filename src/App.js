import { useState } from "react";
import {createWorkerFactory} from '@shopify/web-worker';

const createWorker = createWorkerFactory(() => import('./worker'));

const fib = (num) => num <= 2 ? 1 : fib(num - 1) + fib(num - 2);

function App() {
  const [isBusy, setIsBusy] = useState(false);

  const handleClick = async () => {
    let num = 44;
    const myWorker = createWorker();
    let t0 = performance.now();
    const result = await myWorker.fib(num);
    const timeTaken = performance.now() - t0;

    console.log("Result =", result, "(time taken =", timeTaken, "ms)");
    setIsBusy(false);
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
