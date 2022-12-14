import { useState } from "react";
import { asyncRun } from "./py-worker";
import fib from './py-libs/fib.py';

function App() {
  const [output, setOutput] = useState(0);
  const [isBusy, setIsBusy] = useState(false);
  let num = 35;

  const handleClick = async () => {
    const script = await (await fetch(fib)).text();
    const context = { n: num };

    async function run_webworker() {
      try {
        const { results, error } = await asyncRun(script, context);
        if (results) {
          console.log("pyodideWorker return results: ", results);
          setOutput(results);
          setIsBusy(false);
        } else if (error) {
          console.log("pyodideWorker error: ", error);
        }
      } catch (e) {
        console.log(
          `Error in pyodideWorker at ${e.filename}, Line: ${e.lineno}, ${e.message}`
        );
      }
    }

    run_webworker();
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => { setIsBusy(true); handleClick(); }}>Calculate</button>
      {isBusy && <p>Please wait. Calculating...</p>}
      <p>F({num}) = {output}</p>
    </div>
  );
}

export default App;
