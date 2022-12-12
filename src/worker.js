// https://github.com/Shopify/quilt/blob/main/packages/web-worker/README.md
export const fib = (num) => num <= 2 ? 1 : fib(num - 1) + fib(num - 2);

// we can also do default export
// export default fib;
// import by: const result = await myWorker.default(num);
