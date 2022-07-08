import { Box, Grid } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NotesItem } from "../notesItem";

export const Notes = () => {
  const [page, setPage] = useState(1);
  const notes = useSelector((state) => state.notes.notes[page]);
  const state = useSelector((state) => state.notes);
  console.log(state);
  const total = Object.keys(useSelector((state) => state.notes.notes)).length;
  const handleChangePage = (e, page) => {
    setPage(page);
  };
  return (
    <Box>
      <Grid
        container
        spacing={5}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {!notes.length && "пока записей нет"}
        {notes.map(({ notes, sign, tz, date, id }) => {
          return (
            <Grid item xs={6}>
              <NotesItem
                notes={notes}
                sign={sign}
                date={date}
                tz={tz}
                key={id}
              />
            </Grid>
          );
        })}
      </Grid>
      <Pagination count={total} onChange={handleChangePage} />
    </Box>
  );
};
