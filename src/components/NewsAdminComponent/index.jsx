import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Button
} from '@mui/material';
import { useStyles } from './newsAdmin.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import background from '../../assets/images/background.jpg';
import { useQuery } from 'react-query';
import { Typography } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, useNavigate } from 'react-router-dom';
import newsService from '../../async/services/newsService';
import newsDeleteServices from '../../async/services/delete/newsDeleteServices';

function NewsAdminComponent() {
  const navigation = useNavigate();

  const handleNavigation = (route) => {
    navigation(`/admin/${route}`);
  };

  const handleDelete = async (id) => {
    try {
      await newsDeleteServices(id);
      refetch();
    } catch (error) {
      console.error('Error deleting new:', error);
    }
  }

  const { data, isLoading, refetch, error } = useQuery(`newsAdmin`, () => newsService());
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.box}>
        <Typography variant='h3'>Noticias y Novedades</Typography>
        <Button
          variant="outlined"
          startIcon={<AddCircleIcon />}
          className={classes.button}
          onClick={() => handleNavigation('addNews')}
        >
          AGREGAR NUEVO
        </Button>
        <Table sx={{ width: '50rem', marginBottom: '5rem' }} className={classes.table}>
          <TableHead>
            <TableRow sx={{ color: 'white' }}>
              <TableCell sx={{ color: 'white' }} className={classes.row}>
                Título
              </TableCell>
              <TableCell sx={{ color: 'white' }} className={classes.row}>
                Fecha
              </TableCell>
              <TableCell sx={{ color: 'white' }} className={classes.row}>
                Descripción
              </TableCell>
              <TableCell sx={{ color: 'white' }} className={classes.row}>
                Actualizar
              </TableCell>
              <TableCell sx={{ color: 'white' }} className={classes.row}>
                Eliminar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading && !error
              ? data.map((item) => (
                <TableRow sx={{ color: 'white' }} key={item.novelty_id}>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
                    {item.title}
                  </TableCell>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
                    {item.date}
                  </TableCell>
                  <TableCell className={classes.cellDesc} sx={{ color: 'white' }}>
                    {item.description}
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <Button variant="outlined">
                      <Link
                        to={`/admin/addNews/${item.novelty_id}`}
                        state={{ item }}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        Actualizar
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <Button variant="outlined" startIcon={<DeleteIcon />} color='error' onClick={() => handleDelete(item.novelty_id)}>
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
              : null}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
export default NewsAdminComponent