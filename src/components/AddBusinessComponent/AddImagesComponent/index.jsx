import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { useStyles } from './AddImages.styles';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import imagesUpdateService from '../../../async/services/put/imagesUpdateService';
import imagesAddServices from '../../../async/services/post/imagesAddServices';
import loginSession from '../../../async/services/post/loginSession';
import { MainContext } from '../../../context/MainContext';
import imagesOneBusiness from '../../../async/services/imagesOneBusiness';
import { useQuery } from 'react-query';

const AddImages = () => {
  const classes = useStyles();
  const { setAuth, setToken, user } = useContext(MainContext);
  const { id } = useParams();
  const location = useLocation();
  const { data, isLoading, error, refetch } = useQuery('imagesOneBusiness', () => imagesOneBusiness(location.state));
  const navigation = useNavigate();
  const [imagesData, setImagesData] = useState({
    image: null,
  });

  const handleChange = (event) => {
    const { name, files } = event.target;

    setImagesData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', imagesData.image);
      formData.append('business_id', location.state);
      await imagesAddServices(formData);
      alert('Imagen agregada correctamente');
      event.target.reset();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigation = async () => {
    if (user && !id) {
      const login = await loginSession(user);
      setToken(login.token);
      setAuth(true);
    }
    navigation('/establishmentAdmin/home', { state: location?.state });
  };

  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'Editar Imágenes' : 'Agregar Nueva Imagen'}
      </Typography>
      <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <TableHead>
          <TableRow sx={{
            color: 'white'
          }}>
            <TableCell sx={{ color: 'white' }}>Imagen</TableCell>
            <TableCell sx={{ color: 'white' }}>Eliminar Imagen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !error ? data.map(item => (
            <TableRow key={item.image_id} sx={{ color: 'white' }}>
              <TableCell>
                <img src={item.image_url} alt={`Image ${item.image_id}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              </TableCell>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
                <Button variant="contained" >
                  Eliminar Imagen
                </Button>
              </TableCell>
            </TableRow>
          ))
            : null}
        </TableBody>
      </Table>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="image"
            required
            style={{ marginBottom: '30px', color: 'white' }}
          />
        </Box>
        <Button type="submit" variant="outlined" className={classes.button}>
          Agregar Nueva
        </Button>
        <Button className={classes.buttonFinish} onClick={handleNavigation}>
          Terminar
        </Button>
      </form>
    </Container>
  );
};

export default AddImages;
