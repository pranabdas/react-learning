import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  return (
    <div className="App">
      <h1>Auth0 tutorial</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
      <button onClick={() => logout()}>Log out</button>
      <p>{JSON.stringify(user)}</p>

      {isAuthenticated ? (
        <p>User is authenticated</p>
      ) : (
        <p>User is not authenticated</p>
      )}

      {isLoading && <p>Page is loading...</p>}
    </div>
  );
}

export default App;
