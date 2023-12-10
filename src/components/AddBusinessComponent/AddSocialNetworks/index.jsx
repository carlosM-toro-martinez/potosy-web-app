import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';
import { useStyles } from './AddSocialNetworks.styles';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import socialNetUpdateService from '../../../async/services/put/socialNetUpdateService';
import socialNetAddServices from '../../../async/services/post/socialNetAddServices';
import MuiAlert from '@mui/material/Alert';
import { Snackbar, LinearProgress } from '@mui/material';

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

const AddSocialNetworks = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const [socialNetworksData, setSocialNetworksData] = useState({
    facebook_url: '',
    instagram_url: '',
    twitter_url: '',
    tiktok_url: '',
    whatsapp_number: '',
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSocialNetworksData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const newData = { ...socialNetworksData, business_id: location.state };
      const promiseResult = await id ? socialNetUpdateService(id, newData) : socialNetAddServices(newData);
      promiseResult.then((data) => {
        id ? navigation('/establishmentAdmin/home') : navigation('/establishmentAdmin/promotions', { state: location.state })
      }).catch((error) => {
        console.error('Error al resolver la promesa:', error);
      });

    } catch (error) {
      console.error(error);
      setSnackbarOpen(true);
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
        {id ? 'Editar Redes Sociales' : 'Agregar Nuevas Redes Sociales'}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ValidationTextField
            fullWidth
            label="Facebook URL"
            name="facebook_url"
            value={socialNetworksData.facebook_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="Instagram URL"
            name="instagram_url"
            value={socialNetworksData.instagram_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="Twitter URL"
            name="twitter_url"
            value={socialNetworksData.twitter_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="TikTok URL"
            name="tiktok_url"
            value={socialNetworksData.tiktok_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="Número de WhatsApp"
            name="whatsapp_number"
            value={socialNetworksData.whatsapp_number}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="outlined" className={classes.button}>
          {id ? 'Actualizar Datos' : 'Agregar Nuevas'}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          Error al ingresar las redes sociales.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddSocialNetworks;
