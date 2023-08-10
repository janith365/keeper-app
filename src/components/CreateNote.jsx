import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function CreateNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    name === "title" && setTitle(value);
    name === "content" && setContent(value);
  }

  function handleClick(e) {
    e.preventDefault();
    addNote(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} placeholder="Title" value={title} />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={content} />
        <Fab aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}
