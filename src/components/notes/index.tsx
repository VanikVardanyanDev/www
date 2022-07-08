import { Box, Grid } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { NotesItem } from "../notesItem";

export const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  return (
    <Box>
      <Grid
        container
        spacing={5}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {notes.map(({ text, sign, tz, id }) => {
          return (
            <Grid item xs={6}>
              <NotesItem text={text} sign={sign} tz={tz} key={id} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination count={10} />
    </Box>
  );
};
