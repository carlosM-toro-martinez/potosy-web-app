import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography
} from '@mui/material';
import { useStyles } from './adminDashboard.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import background from '../../assets/images/background.jpg';
import { useQuery } from 'react-query';
import businessService from '../../async/services/businessService';
import businessDeleteServices from '../../async/services/delete/businessDeleteServices';
import { useNavigate } from 'react-router-dom';

function AdminDashbord() {
  //const { data, isLoading, isError, error } = useQuery(`business`, () => sectionsService());
  const { data, isLoading, isError, error, refetch } = useQuery(`business`, () => businessService());
  const navigate = useNavigate();
  const handleNavigate = (business_id) => {
    navigate(`/admin/detailBusiness/${business_id}`)
  }
  const handleDelete = async (idBusiness) => {
    try {
      await businessDeleteServices(idBusiness);
      refetch();
    } catch (error) {
      console.error('Error deleting business:', error);
    }
  }
  const clasess = useStyles();
  return (
    <Box className={clasess.container}>
      <TableContainer
        component={Paper}
        sx={{
          backgroundImage: `url(${background})`,
          color: 'white'
        }}>
        <Box className={clasess.box}>
          <Typography variant='h3' >establecimientos</Typography>
          <Table sx={{ width: '50rem' }} className={clasess.table}>
            <TableHead>
              <TableRow sx={{
                color: 'white'
              }}>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>Name</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>telefono</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>direccion</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>Detalles</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>Eliminar</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && !error ? data.map(item => (
                <TableRow key={item.business_id} sx={{ color: 'white' }}>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.name}</TableCell>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.phone_number}</TableCell>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.address}</TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <Button variant="outlined" onClick={() => handleNavigate(item.business_id)} >
                      Ver_Mas
                    </Button>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(item.business_id)}>
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
                    <Button color={item.state === true ? 'success' : 'error'}>
                      {item.state === true ? 'Aceptado' : 'Pendiente'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
                : null}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Box>
  )
}

export default AdminDashbord