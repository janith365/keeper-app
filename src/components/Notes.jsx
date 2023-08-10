import Note from "./Note";

export default function Notes({ notes, deleteNote }) {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.key} id={note.key} title={note.title} content={note.content} deleteNote={deleteNote} />
      ))}
    </>
  );
}
