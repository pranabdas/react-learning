import React  from 'react';

function App() {

  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [people, setPeople] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email }
      setPeople((people) => {
        return [...people, person]
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('Empty value');
    }
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Name: </label>
          <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
          type="text" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add person</button>
      </form>
      {
        people.map((person) => {
          const { id, firstName, email } = person;
          return (<div key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>);
        })
      }
    </>
  );
};

export default App
