# React Hello World

[Go back to main branch](https://github.com/pranabdas/react-learning/tree/main)

In this tutorial we will learn how to create the simplest React app "Hello
World".

We have cleared out some of the unnecessary files from our template react
project:

```js
function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <p>I am learning react and liking it.</p>
    </>
  );
}
```

Note that if we have more than one html component, we need to wrap them inside a
single component, here an empty tag (called react fragment).
