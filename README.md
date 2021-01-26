# React Hello World
  
[Go back to master branch](https://github.com/pranabdas/react-learning/tree/master)

In this tutorial we will learn how to create the simplest React app "Hello
World".

We are going to clear out all the files from our template react app, except 
`index.html` in the `public` folder, and `index.js` in the `src` folder. This
will be the content of our `index.js` file:

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <h1>Hello React! </h1>
    <p>I am learning react and liking it. </p>
  </>
  ,document.getElementById('root')
);
```

Note that if we have more than one html component, we need to wrap them inside a
single component, here an empty tag. 
