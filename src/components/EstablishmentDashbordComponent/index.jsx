import React, { useContext, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Button,
  Typography
} from '@mui/material';
import { useStyles } from './EstablishmentDashbord.styles';
import { useQuery } from 'react-query';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import businessFindOne from '../../async/services/businessFindOneService';

function EstablishmentDashbord() {
  const { user, setUser, token } = useContext(MainContext);
  const location = useLocation();
  const { data, isLoading, isError, error, refetch } = useQuery(`businessOne`, () => businessFindOne(location?.state));
  const navigate = useNavigate();
  const handleEditData = (uri, id) => {
    navigate(`/establishmentAdmin${uri}/${id}`, { state: location?.state })
  }
  const clasess = useStyles();

  if (!location?.state || !user) {
    return <Navigate to="/" />;
  }

  return (
    <Box className={clasess.box}>
      <Typography variant='h3' >establecimiento</Typography>
      {!isLoading && !error ? <Typography variant='h4' sx={{ color: data[0]?.state ? 'green' : 'red' }} >{data[0]?.state ? 'aceptado' : 'pendiente'}</Typography> : null}
      <Table sx={{ width: '50rem' }} className={clasess.table}>
        <TableHead>
          <TableRow sx={{
            color: 'white'
          }}>
            <TableCell sx={{ color: 'white' }} className={clasess.row}>Name</TableCell>
            <TableCell sx={{ color: 'white' }} className={clasess.row}>telefono</TableCell>
            <TableCell sx={{ color: 'white' }} className={clasess.row}>direccion</TableCell>
            <TableCell sx={{ color: 'white' }} className={clasess.row}>Descripcion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !error ? data.map(item => (
            <TableRow key={item.business_id} sx={{ color: 'white' }}>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.business_name}</TableCell>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.phone_number}</TableCell>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.address}</TableCell>
              <TableCell sx={{
                color: 'white', textTransform: 'capitalize', overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '300px'
              }}>{item?.business_description}</TableCell>
            </TableRow>
          ))
            : null}

        </TableBody>
      </Table>
      <Box sx={{ display: 'flex', color: 'white', width: '50rem', gap: 5, marginBottom: '5rem' }}>
        <Button variant="contained" onClick={() => handleEditData('', location?.state)} >
          Actualizar Datos Principales
        </Button>
        <Button variant="contained" onClick={() => handleEditData('/socialNet', data[0]?.socialnetworks[0]?.social_networks_id)} >
          Actualizar Redes Sociales
        </Button>
        <Button variant="contained" onClick={() => handleEditData('/promotions', location?.state)} >
          Actualizar Promociones
        </Button>
        <Button variant="contained" onClick={() => handleEditData('/products', location?.state)} >
          Actualizar Productos
        </Button>
        <Button variant="contained" onClick={() => handleEditData('/openinghours', data[0]?.openinghours[0]?.opening_id)} >
          Actualizar Horarios
        </Button>
        <Button variant="contained" onClick={() => handleEditData('/images', location?.state)} >
          Actualizar Imagenes
        </Button>
      </Box>
    </Box>
  )
}

export default EstablishmentDashbord