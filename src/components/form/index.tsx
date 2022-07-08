import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import "@fontsource/roboto";
import { request } from "../../api";

const validationSchema = Yup.object({
  notes: Yup.string().required("обязательное поле"),
  sign: Yup.string().max(100).required("обязательное поле"),
  tz: Yup.string().required("обязательное поле"),
});
export const CreateForm = () => {
  const [zone, setZone] = useState([]);
  const [isZone, setIsZone] = useState(true);

  const formik = useFormik({
    initialValues: {
      notes: "",
      sign: "",
      tz: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const getZone = async () => {
    try {
      const result = await request.get("timezone");
      setZone(result.data);
      setIsZone(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getZone();
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="outlined-multiline-flexible"
        label="Запись"
        placeholder="Запись"
        multiline
        variant="outlined"
        fullWidth
        minRows={10}
        name="notes"
        onChange={formik.handleChange}
        error={formik.touched.notes && Boolean(formik.errors.notes)}
        helperText={formik.touched.notes && formik.errors.notes}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "50px",
        }}
      >
        <TextField
          id="outlined-name"
          label="Подпись"
          variant="outlined"
          fullWidth
          style={{
            marginRight: "15px",
          }}
          name="sign"
          onChange={formik.handleChange}
          error={formik.touched.sign && Boolean(formik.errors.sign)}
          helperText={formik.touched.sign && formik.errors.sign}
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Точное время по</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.tz}
            label="Точное время по"
            variant="outlined"
            disabled={isZone}
            name="tz"
            onChange={(e) => {
              console.log(e.target.value);
              formik.setFieldValue("tz", e.target.value);
            }}
            style={{
              width: "200px",
            }}
          >
            {zone.map((item) => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
          <Box sx={{ color: "red" }}>
            {formik.touched.tz && formik.errors.tz}
          </Box>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{
          margin: "15px 0",
        }}
      >
        Создать
      </Button>
    </form>
  );
};
