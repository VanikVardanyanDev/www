import { nanoid } from "nanoid";

const initialState = {
  notes: [
    { text: "text", sign: "Vanik Vardanyan", tz: "azia/yerevan", id: nanoid() },
    {
      text: "text",
      sign: "Vanik Vardanyan2",
      tz: "azia/yerevan",
      id: nanoid(),
    },
    {
      text: "text",
      sign: "Vanik Vardanyan3",
      tz: "azia/yerevan",
      id: nanoid(),
    },
    {
      text: "text",
      sign: "Vanik Vardanyan4",
      tz: "azia/yerevan",
      id: nanoid(),
    },
  ],
};

export const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
