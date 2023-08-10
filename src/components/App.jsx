import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Notes from "./Notes";
import CreateNote from "./CreateNote";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(title, content) {
    const note = {
      key: notes.length + 1,
      title: title,
      content: content
    };
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.key !== id));
  }

  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}
