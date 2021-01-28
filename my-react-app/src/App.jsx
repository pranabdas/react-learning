import React from 'react';

function App() {

  const url = "https://api.github.com/users"; 
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }

  React.useEffect(() => {
    getUsers();
  }, []);  // runs useEffect only on initial render

  return(
    <>
      <h1>Github Users</h1>
      {users.map((user) => {
        return (<div key={user.id}>
          <img src={user.avatar_url} alt={user.login} width="100px"/>
          <h4><a href={user.url}>{user.login}</a></h4>
          <hr/>
        </div>);
      })}
    </>
  );
}

export default App
