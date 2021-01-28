import React from 'react';

function App() {
  const url = "https://api.github.com/users/pranabdas"; 
  const [isLoading, setLoading] = React.useState(true);
  const [isError, setError] = React.useState(false);
  const [user, setUser] = React.useState('default user');

  React.useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return resp.json()
        }
        else {
          setLoading(false);
          setError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        setUser(user.login)
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>
  };

  if (isError) {
    return <h3>There was an error!</h3>
  };

  return(
    <>
      <h1>Conditional Rendering</h1>
      <h4>{user}</h4>
    </>
  );
}

export default App
