import { Box, Typography } from "@material-ui/core";

interface INotesItem {
  text: string;
  sign: string;
  tz: string;
}

export const NotesItem = ({ text, sign, tz }: INotesItem) => {
  return (
    <Box sx={{ border: "1px solid black" }}>
      <Typography>{sign}</Typography>
      <Typography>Запись N 1</Typography>
      <Typography>{tz}</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};
