import { Box } from "@material-ui/core";
import { CreateForm } from "./components/form";
import { Notes } from "./components/notes";

export const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <CreateForm />
      <Notes />
    </Box>
  );
};
