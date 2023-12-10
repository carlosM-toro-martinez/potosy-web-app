import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
  LinearProgress
} from '@mui/material';
import { useStyles } from './AddHours.styles';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import openingHoursUpdateService from '../../../async/services/put/openingHoursUpdateService';
import openingHoursAddServices from '../../../async/services/post/openingHoursAddServices';
import MuiAlert from '@mui/material/Alert';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    color: 'white'
  },
  '& input:invalid + fieldset': {
    borderColor: 'white',
    borderWidth: 1,
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& textarea:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    color: 'white'
  },
  '& textarea:invalid + fieldset': {
    borderColor: 'white',
    borderWidth: 1,
  },
  '& .MuiInputBase-multiline': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiFormHelperText-root': {
    color: 'white',
  },
  '& fieldset': {
    borderColor: 'white !important',
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
    weekend: '',
    morning_hours_open: '',
    morning_hours_close: '',
    afternoon_hours_open: '',
    afternoon_hours_close: '',
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
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
      const newData = {
        weekend: openingHoursData.weekend,
        morning_hours: [openingHoursData.morning_hours_open, openingHoursData.morning_hours_close],
        afternoon_hours: [openingHoursData.afternoon_hours_open, openingHoursData.afternoon_hours_close],
        business_id: location.state
      }
      await id ? openingHoursUpdateService(id, newData) : openingHoursAddServices(newData);
      navigation('/establishmentAdmin/images', { state: location.state })

    } catch (error) {
      console.error(error);
    }
  };

  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <Typography style={{ color: 'white' }} variant="h6">Cargando...</Typography>
          <LinearProgress />
        </div>
      )}
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'Editar Horario de Apertura' : 'Agregar Nuevo Horario de Apertura'}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6" align="center" sx={{ color: 'white' }} > Mañana</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
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
          <Typography variant="h6" align="center" sx={{ color: 'white' }} > Tarde</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
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
        <Button type="submit" variant="outlined" className={classes.button}>
          {id ? 'Actualizar Datos' : 'Agregar Nuevo'}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          Error al ingresar los horarios.
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default AddHours;
