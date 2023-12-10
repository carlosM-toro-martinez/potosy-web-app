import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  FormHelperText,
  Grid,
  LinearProgress,
  Snackbar,
} from '@mui/material';
import { useStyles } from './AddBusiness.styles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import businessUpdateServices from '../../async/services/put/businessUpdateServices';
import businessAddService from '../../async/services/post/businessAddServices';
import { useQuery } from 'react-query';
import sectionsService from '../../async/services/sectionsService';
import MuiAlert from '@mui/material/Alert';
import businessOneService from '../../async/services/businessOneService';


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

const AddBusinessComponent = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError, error, refetch } = useQuery(`sectionsAdmin`, () => sectionsService());
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const [businessData, setBusinessData] = useState({
    name: '',
    description: '',
    days_attention: '',
    logo_url: '',
    phone_number: '',
    website_url: '',
    mail: '',
    address: '',
    coordinates: '',
    section_id: '',
    latitude: '',
    longitude: '',
    image: null
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setBusinessData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const NewData = { ...businessData, coordinates: `(${businessData.latitude},${businessData.longitude})` }
      const formData = new FormData();
      for (const key in NewData) {
        if (key === 'image' && NewData[key] !== null) {
          formData.append(key, NewData[key]);
        } else {
          formData.append(key, NewData[key]);
        }
      }
      const promiseResult = await id ?
        businessUpdateServices(id, formData) :
        businessAddService(formData);
      promiseResult.then((data) => {
        navigation('/signup', { state: data.business_id })
      }).catch((error) => {
        console.error('Error al resolver la promesa:', error);
      });
    } catch (error) {
      console.error(error);
      setSnackbarOpen(true);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <Typography style={{ color: 'white' }} variant="h6">Cargando...</Typography>
          <LinearProgress />
        </div>
      )}
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'editar Establesimiento' : 'Agregar Nuevo Establesimiento'}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: '2rem', alignItems: 'center' }}>
            <label htmlFor="logoInput" style={{ marginBottom: '8px', color: 'white' }}>
              Por favor, introduce el icono de su establecimiento:
            </label>
            <input
              id="logoInput"
              type="file"
              accept="image/*"
              onChange={handleChange}
              name="image"
              required
              style={{ marginBottom: '16px', color: 'white' }}
            />
          </Box>
          <ValidationTextField
            required
            fullWidth
            label="Nombre"
            name="name"
            value={businessData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            helperText="Ingrese el nombre de su negocio."
          />
          <ValidationTextField
            required
            fullWidth
            label="Descripción"
            name="description"
            value={businessData.description}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            helperText="Ingrese una breve descripción de su negocio."
          />
          <FormControl fullWidth sx={{ marginBottom: 2, color: 'white' }}>
            <InputLabel id="section-label" style={{ color: 'white' }}>
              Dias de Atencion
            </InputLabel>
            <Select
              id="days_attention"
              name="days_attention"
              value={businessData.days_attention}
              label="Días de Atención"
              onChange={handleChange}
              required
              sx={{ color: 'white', '& fieldset': { borderColor: 'white' } }}
            >
              <MenuItem value='Lunes - Viernes'>
                Lunes - Viernes
              </MenuItem>
              <MenuItem value='Lunes - Sabado'>
                Lunes - Sabado
              </MenuItem>
              <MenuItem value='Lunes - Domingo'>
                Lunes - Domingo
              </MenuItem>
            </Select>
            <FormHelperText sx={{ color: 'white' }}>Seleccione los días en que su negocio está abierto.</FormHelperText>
          </FormControl>
          <ValidationTextField
            fullWidth
            label="Número de Teléfono"
            name="phone_number"
            required
            value={businessData.phone_number}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            helperText="Ingrese el número de teléfono de contacto."
          />
          <ValidationTextField
            fullWidth
            label="URL del Sitio Web"
            name="website_url"
            value={businessData.website_url}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            helperText="Ingrese la URL del sitio web de su negocio, si la tiene."
          />

          <ValidationTextField
            fullWidth
            label="Correo Electrónico"
            name="mail"
            value={businessData.mail}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            helperText="Ingrese la dirección de correo electrónico de su negocio."
          />
          <ValidationTextField
            fullWidth
            label="Dirección"
            name="address"
            required
            value={businessData.address}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
            helperText="Ingrese la dirección física de su negocio."
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ValidationTextField
                fullWidth
                label="Latitud"
                name="latitude"
                required
                value={businessData.latitude}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
                helperText="Ingrese la latitud de ubicación de su negocio ejemplo(-19.588706165328464)."
              />
            </Grid>
            <Grid item xs={6}>
              <ValidationTextField
                fullWidth
                label="Longitud"
                name="longitude"
                required
                value={businessData.longitude}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
                helperText="Ingrese la longitud de ubicación de su negocio. ejemplo(-65.75049529319193)"
              />
            </Grid>
          </Grid>

          <FormControl fullWidth sx={{ marginBottom: 2, color: 'white' }}>
            <InputLabel id="section-label" style={{ color: 'white' }}>
              Sección
            </InputLabel>
            <Select
              labelId="section-label"
              id="section-select"
              name="section_id"
              required
              value={businessData.section_id}
              label="Sección"
              onChange={handleChange}
              sx={{ color: 'white', '& fieldset': { borderColor: 'white' } }}
            >
              {!isLoading && !error ? (
                data?.map((section) => (
                  <MenuItem key={section.section_id} value={section.section_id}>
                    {section.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="" sx={{ color: 'white' }}>
                  Cargando...
                </MenuItem>
              )}
            </Select>
            <FormHelperText sx={{ color: 'white' }}>Seleccione la sección a la que pertenece su negocio.</FormHelperText>
          </FormControl>
          <ValidationTextField
            fullWidth
            label="ID de Sección"
            name="section_id"
            value={businessData.section_id}
            onChange={handleChange}
            sx={{ marginBottom: 2, display: 'none' }}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <Button
          type='submit'
          variant="outlined"
          className={classes.button}
        >
          {id ? 'ACTUALIZAR DATOS' : 'AGREGAR NUEVO'}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          Error al ingresar el establecimiento.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddBusinessComponent;
