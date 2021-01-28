import React  from 'react';

function App() {

  const [person, setPerson] = React.useState({firstName: '', age: '', email: ''})
  const [people, setPeople] = React.useState([]);

  const handleChange = (e) => {
    const name = e.target.name; 
    const value = e.target.value;
    setPerson({...person, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.email) {
      const newPerson = {...person, id: new Date().getTime.toString()};
      setPeople([...people, newPerson]);
      setPerson({firstName: '', age: '', email: ''})
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
          value={person.firstName}
          onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input 
          type="text" 
          id="age" 
          name="age" 
          value={person.age}
          onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
          type="text" 
          id="email" 
          name="email" 
          value={person.email}
          onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Add person</button>
      </form>
      {
        people.map((person) => {
          const { id, firstName, age, email } = person;
          return (<div key={id}>
            <h4>{firstName}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>);
        })
      }
    </>
  );
};

export default App
