import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/data").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const newNoteObject = {
      content: newNote,
      important: false,
    };

    axios.post("http://localhost:3001/data", newNoteObject).then((response) => {
      setNotes(notes.concat(response.data)); // this creates a new copy of notes
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <>
      <h1>My notes</h1>
      <ol>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ol>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default App;
