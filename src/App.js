import data from "./Data";

function App() {
  return (
    <>
      <h1>My notes</h1>
      <ol>
        {data.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
