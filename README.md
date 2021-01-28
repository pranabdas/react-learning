# React useEffect
  
[Go back to master branch](https://github.com/pranabdas/react-learning/tree/master)

Here we will use useEffect to update the browser title in our previous counter
example. We will update the counter on the title everytime we click any button.

`useEffect` runs on every re-render. If you want the `useEffect` to run only on
the initial run, we can pass a second argument with empty array: 
```js
React.useEffect(() => {
    document.title = `Current number (${value})`;
  }, []);
```

This second argument can also be used to call useEffect only after change in 
certain parameter, say, `value` in our case: 
```js
React.useEffect(() => {
    document.title = `Current number (${value})`;
  }, [value]);
```

We can have multiple `useEffect`, say one for the initial render, and another
for when the `value` changes. 

Main app is here: [my-react-app/src/App.jsx](./my-react-app/src/App.jsx)

