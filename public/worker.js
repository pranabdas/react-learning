const fib = (num) => num <= 2 ? 1 : fib(num - 1) + fib(num - 2);

onmessage = (e) => {
    let t0 = performance.now();
    const result = fib(e.data);
    const timeTaken = performance.now() - t0;
    postMessage([result, timeTaken]);
}
