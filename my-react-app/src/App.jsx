import React from 'react';

const data = [
  {
    id: 1, 
    name: "Pranab"
  }, 
  {
    id: 2,
    name: "Rupal"
  }, 
  {
    id: 3,
    name: "Bhanu"
  }, 
  {
    id: 4,
    name: "Nihit"
  }
];

function App() {
  const [people, setPeople] = React.useState(data);

  const clearItem = (id) => {
    let newPeople = people.filter((item) => item.id !== id)
    setPeople(newPeople); 
  }

  return(
    <>
      {
        people.map((item) => {
          const { id, name } = item;
          return(
            <div key={id}>
              <h3>{name}</h3>
              <button onClick={() => clearItem(id)}>Clear Item</button>
            </div>
          );
        })
      }
      <button onClick={() => setPeople([])}>Clear All Items</button>
    </>
  );
}

export default App
