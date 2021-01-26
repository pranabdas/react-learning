# React component

[Go back to main branch](https://github.com/pranabdas/react-learning/tree/main)

In this tutorial, we will use the react component.

The content of our `index.js` file:
```js
import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component {
  render() {
    return (
      <>
        <h1>Hello React! </h1>
        <p>Now I am learning react component.</p>
      </>
    )
  }
};

ReactDOM.render(< Heading />, document.getElementById('root'));
```

Note that the React class names must start with an uppercase letter.

We could achieve the above with a function:
```js
import React from 'react';
import ReactDOM from 'react-dom';

function Heading() {
  return (
    <>
      <h1>Hello React! </h1>
      <p>I am learning React and I am liking it.</p>
    </>
  )
};

ReactDOM.render(< Heading />, document.getElementById('root'));
```

