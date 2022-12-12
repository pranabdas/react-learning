import { useEffect, useState } from 'react';
import hello from './py-libs/hello.py';
import fib from './py-libs/fib.py';
import np_pi from './py-libs/np_pi.py';

const runScript = async (code) => {
  const pyodide = await window.loadPyodide();

  return await pyodide.runPythonAsync(code);
};

// https://pyodide.org/en/stable/usage/faq.html#how-can-i-execute-code-in-a-custom-namespace
const runScriptWithVar = async (code, pyVars) => {
  const pyodide = await window.loadPyodide();
  let pyodide_vars = pyodide.toPy({ n: pyVars });

  return await pyodide.runPythonAsync(code, { globals: pyodide_vars });
};

const runScriptWithExtLib = async (code) => {
  const pyodide = await window.loadPyodide();
  await pyodide.loadPackage("numpy");
  return await pyodide.runPythonAsync(code);
};

function App() {
  const [output, setOutput] = useState("(loading...)");
  const [fibResult, setFibResult] = useState(0);
  const [pi, setPi] = useState(0);

  useEffect(() => {
    const run = async () => {
      const scriptText = await (await fetch(hello)).text();
      const result = await runScript(scriptText);
      setOutput(result);
    }
    run();

  }, []);

  let num = 30;

  useEffect(() => {
    const run = async (num) => {
      const scriptText = await (await fetch(fib)).text();
      const result = await runScriptWithVar(scriptText, num);
      setFibResult(result);
    }
    run(num);

  }, [num]);

  useEffect(() => {
    const run = async () => {
      const scriptText = await (await fetch(np_pi)).text();
      const result = await runScriptWithExtLib(scriptText);
      setPi(result);
    }
    run();

  }, []);

  return (
    <div>
      <h1>Pyodide React</h1>
      <p>{output}</p>
      <p>F({num}) = {fibResult}</p>
      <p>F({num}) + 1 = {fibResult + 1}</p>
      <p>Pi = {pi}</p>
    </div>
  );
}

export default App;
