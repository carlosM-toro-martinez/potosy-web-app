import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';
import { useStyles } from './AddProducts.styles';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import productsUpdateService from '../../../async/services/put/productsUpdateService';
import productsAddServices from '../../../async/services/post/productsAddServices';
import productsService from '../../../async/services/productsService';
import MuiAlert from '@mui/material/Alert';
import { Snackbar, LinearProgress } from '@mui/material';


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'black',
    borderWidth: 1,
    color: 'black'
  },
  '& input:invalid + fieldset': {
    borderColor: 'black',
    borderWidth: 1,
  },
  '& .MuiInputBase-input': {
    color: 'black',
  },
  '& .MuiInputLabel-root': {
    color: 'black',
  },
  '& textarea:valid + fieldset': {
    borderColor: 'black',
    borderWidth: 1,
    color: 'black'
  },
  '& textarea:invalid + fieldset': {
    borderColor: 'black',
    borderWidth: 1,
  },
  '& .MuiInputBase-multiline': {
    color: 'black',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
  '& .MuiFormHelperText-root': {
    color: 'black',
  },
  '& fieldset': {
    borderColor: 'black !important',
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddProducts = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const { data, isLoading, error, refetch } = useQuery('products', () => productsService(id ? id : location.state));
  const item = location?.state?.item;
  const [productsData, setProductsData] = useState({
    product_details: '',
    price: '',
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const newData = { ...productsData, business_id: location.state };
      const promiseResult = await id ? productsUpdateService(productsData.product_id, newData) : productsAddServices(newData);
      promiseResult.then((data) => {
        setLoading(false);
        refetch();
        setProductsData({
          product_details: '',
          price: '',
        })
      }).catch((error) => {
        console.error('Error al resolver la promesa:', error);
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigation = () => {
    id ? navigation('/establishmentAdmin/home') : navigation('/establishmentAdmin/openinghours', { state: location.state })
  };

  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <Typography style={{ color: 'black' }} variant="h6">Cargando...</Typography>
          <LinearProgress />
        </div>
      )}
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'Editar Producto' : 'Agregar Nueva Producto'}
      </Typography>
      <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <TableHead>
          <TableRow sx={{
            color: 'black'
          }}>
            <TableCell sx={{ color: 'black' }}>Detalle</TableCell>
            <TableCell sx={{ color: 'black' }}>Precio</TableCell>
            <TableCell sx={{ color: 'black' }}>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !error ? data.map(item => (
            <TableRow key={item.product_id} sx={{ color: 'black' }}>
              {/* <TableCell sx={{
                    color: 'white', textTransform: 'capitalize', overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '300px'
                  }}>{item?.attributes?.image?.data?.attributes?.url}</TableCell> */}
              <TableCell sx={{ color: 'black', textTransform: 'capitalize' }}>{item?.product_details}</TableCell>
              <TableCell sx={{ color: 'black', textTransform: 'capitalize' }}>{item?.price}</TableCell>
              <TableCell sx={{ color: 'black', textTransform: 'capitalize' }}>
                <Button variant="contained" onClick={() => setProductsData(
                  {
                    product_details: item?.product_details,
                    product_id: item?.product_id,
                    price: item?.price,
                  }
                )} >
                  Actualizar Imagenes
                </Button>
              </TableCell>
            </TableRow>
          ))
            : null}
        </TableBody>
      </Table>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ValidationTextField
            fullWidth
            label="Detalles de el Producto"
            name="product_details"
            value={productsData.product_details}
            onChange={handleChange}
            required
          />
          <ValidationTextField
            fullWidth
            label="Precio"
            name="price"
            value={productsData.price}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="contained" className={classes.button}>
          {id ? 'Actualizar Datos' : 'Agregar'}
        </Button>
        <Button className={classes.buttonFinish} onClick={handleNavigation}>
          Siguiente
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          Error al ingresar Los productos.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddProducts;
