import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note({ id, title, content, deleteNote }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <IconButton aria-label="delete" onClick={() => deleteNote(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
