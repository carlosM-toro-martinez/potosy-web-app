import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
  LinearProgress,
} from "@mui/material";
import { useStyles } from "./AddHours.styles";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import openingHoursUpdateService from "../../../async/services/put/openingHoursUpdateService";
import openingHoursAddServices from "../../../async/services/post/openingHoursAddServices";
import MuiAlert from "@mui/material/Alert";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
    color: "black",
  },
  "& input:invalid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& textarea:valid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
    color: "black",
  },
  "& textarea:invalid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
  },
  "& .MuiInputBase-multiline": {
    color: "black",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
  "& .MuiFormHelperText-root": {
    color: "black",
  },
  "& fieldset": {
    borderColor: "black !important",
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddHours = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const [openingHoursData, setOpeningHoursData] = useState({
    weekend: "",
    morning_hours_open: "",
    morning_hours_close: "",
    afternoon_hours_open: "",
    afternoon_hours_close: "",
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOpeningHoursData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const business_id = Array.isArray(location.state)
        ? location?.state[0]?.business_id
        : location.state;
      const newData = {
        weekend: openingHoursData.weekend,
        morning_hours: [
          openingHoursData.morning_hours_open,
          openingHoursData.morning_hours_close,
        ],
        afternoon_hours: [
          openingHoursData.afternoon_hours_open,
          openingHoursData.afternoon_hours_close,
        ],
        business_id: business_id,
      };
      const promiseResult = (await id)
        ? openingHoursUpdateService(id, newData)
        : openingHoursAddServices(newData);
      promiseResult
        .then((data) => {
          id
            ? navigation("/establishmentAdmin/home", {
                state: business_id,
              })
            : navigation("/establishmentAdmin/images", { state: business_id });
        })
        .catch((error) => {
          console.error("Error al resolver la promesa:", error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (location?.state) {
      setOpeningHoursData({
        weekend: location?.state[0]?.openinghours[0]?.weekend,
        morning_hours_open:
          location?.state[0]?.openinghours[0]?.morning_hours[0],
        morning_hours_close:
          location?.state[0]?.openinghours[0]?.morning_hours[1],
        afternoon_hours_open:
          location?.state[0]?.openinghours[0]?.afternoon_hours[0],
        afternoon_hours_close:
          location?.state[0]?.openinghours[0]?.afternoon_hours[1],
      });
    }
  }, []);

  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <Typography style={{ color: "black" }} variant="h6">
            Cargando...
          </Typography>
          <LinearProgress />
        </div>
      )}
      <Typography variant="h4" align="center" gutterBottom>
        {id
          ? "Editar Horario de Apertura"
          : "Agregar Nuevo Horario de Apertura"}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6" align="center" sx={{ color: "black" }}>
            {" "}
            Mañana
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <ValidationTextField
              fullWidth
              name="morning_hours_open"
              type="time"
              value={openingHoursData.morning_hours_open}
              onChange={handleChange}
              helperText="Ingrese hora de apertura"
            />
            <ValidationTextField
              fullWidth
              name="morning_hours_close"
              type="time"
              value={openingHoursData.morning_hours_close}
              onChange={handleChange}
              helperText="Ingrese hora de cierre"
            />
          </Box>
          <Typography variant="h6" align="center" sx={{ color: "black" }}>
            {" "}
            Tarde
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <ValidationTextField
              fullWidth
              name="afternoon_hours_open"
              type="time"
              value={openingHoursData.afternoon_hours_open}
              onChange={handleChange}
              helperText="Ingrese hora de apertura"
            />
            <ValidationTextField
              fullWidth
              name="afternoon_hours_close"
              type="time"
              value={openingHoursData.afternoon_hours_close}
              onChange={handleChange}
              helperText="Ingrese hora de cierre"
            />
          </Box>
          <ValidationTextField
            fullWidth
            label="Día de Fin de Semana"
            name="weekend"
            value={openingHoursData.weekend}
            onChange={handleChange}
            helperText="ingrese solo si tiene algun horario especial (sabados de 8:00 - 13:00)"
          />
        </Box>
        <Button type="submit" variant="contained" className={classes.button}>
          {id ? "Actualizar Datos" : "Agregar Nuevo"}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          Error al ingresar los horarios.
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default AddHours;
