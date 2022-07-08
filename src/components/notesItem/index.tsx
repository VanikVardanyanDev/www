import { Card, CardContent, Typography } from "@mui/material";

interface INotesItem {
  notes: string;
  sign: string;
  tz: string;
  date: string;
}

export const NotesItem = ({ notes, sign, date }: INotesItem) => {
  return (
    // </Box>
    <Card sx={{ minWidth: 150, borderLeft: "none" }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {sign}
        </Typography>
        <Typography>Запись N 1</Typography>
        <Typography color="text.secondary" sx={{ mb: 1.5 }}>
          {date}
          <br />
        </Typography>
        <Typography>{notes}</Typography>
      </CardContent>
    </Card>
  );
};
