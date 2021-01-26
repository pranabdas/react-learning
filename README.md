# React App component

[Go back to main branch](https://github.com/pranabdas/react-learning/tree/main)

Now we will separate the app component to a new file leaving our `index.js`
clean.

Our `index.js` becomes:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(< App />, document.getElementById('root'));
```

We will have a new file `App.jsx` which will be our actual app.

Main app is here: [my-react-app/src/App.jsx](./my-react-app/src/App.jsx)

