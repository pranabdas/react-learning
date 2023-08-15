import { useState } from "react";
import data from "./Data";

function App() {
  const [notes, setNotes] = useState(data);
  const [newNote, setNewNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const newNoteObject = {
      content: newNote,
      important: false,
      id: notes.length + 1,
    };
    
    setNotes(notes.concat(newNoteObject));
    setNewNote("");
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
