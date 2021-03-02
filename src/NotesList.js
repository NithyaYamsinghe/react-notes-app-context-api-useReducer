import React, { useContext } from "react";
import { Context } from "./Provider";
import NoteItem from "./NoteItem";

const NotesList = () => {
  const globalState = useContext(Context);
  const { dispatch, state } = globalState;

  return (
    <>
      <ul>
        <h3>Notes list</h3>
        {state.notes.map((note) => (
          <NoteItem
            key={note.id}
            onClick={() =>
              dispatch({
                type: "TOGGLE_NOTES",
                id: note.id,
              })
            }
            {...note}
          />
        ))}
      </ul>
    </>
  );
};

export default NotesList;
