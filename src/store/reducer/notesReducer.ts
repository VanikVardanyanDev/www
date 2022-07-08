import { nanoid } from "nanoid";

const initialState = {
  notes: {
    1: [
      {
        notes: "sojijdusi",
        sign: "Vanik",
        date: "2022-07-08T14:09:48.777337+01:00",
      },
    ],
  },
};

export const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_NOTES": {
      const note = { ...action.payload, id: nanoid() };
      const totalPage = Object.keys(state.notes).length;
      const pageItemCount = state.notes[totalPage].length;
      if (pageItemCount !== 10) {
        const notes = {
          ...state.notes,
          [totalPage]: [...state.notes[totalPage], note],
        };
        return { ...state, notes };
      }
      const notes = { ...state.notes, [totalPage + 1]: [note] };
      return { ...state, notes };
    }
    default:
      return state;
  }
};
