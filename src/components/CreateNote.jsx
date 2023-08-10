import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

export default function CreateNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setExpanded] = useState(false);

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
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={title} />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={() => setExpanded(true)}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
        />
        <Zoom in={isExpanded}>
          <Fab aria-label="add" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
