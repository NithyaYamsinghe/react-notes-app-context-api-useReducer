import React, { useReducer } from "react";

export const Context = React.createContext();
const initialState = {
  notes: [
    { id: 1, name: "complete mathematics assignment", completed: false },
    { id: 2, name: "ready for mid semester examination", completed: false },
  ],
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "TOGGLE_NOTES":
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.id === action.id
              ? { ...note, completed: !note.completed }
              : note
          ),
        };
      default:
        return state;
    }
  }, initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
