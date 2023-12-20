import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button
} from '@mui/material';
import { useStyles } from './newsAdmin.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery } from 'react-query';
import { Typography } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, useNavigate } from 'react-router-dom';
import adminService from '../../async/services/adminService';
import adminDeleteServices from '../../async/services/delete/adminDeleteServices';

function AdminControlComponent() {
  const navigation = useNavigate();

  const handleNavigation = (route) => {
    navigation(`/admin/${route}`);
  };

  const handleDelete = async (id) => {
    try {
      await adminDeleteServices(id);
      refetch();
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  }

  const { data, isLoading, refetch, error } = useQuery(`admins`, () => adminService());
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Paper elevation={8}>
        <Box className={classes.box}>
          <Typography variant='h3'>Administradores</Typography>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            className={classes.button}
            onClick={() => handleNavigation('addAdmins')}
          >
            AGREGAR NUEVO SUPER ADMIN
          </Button>
          <Table sx={{ width: '50rem', marginBottom: '5rem' }} className={classes.table}>
            <TableHead>
              <TableRow sx={{ color: 'black' }}>
                <TableCell sx={{ color: 'black' }} className={classes.row}>
                  Nombre de usuario
                </TableCell>
                <TableCell sx={{ color: 'black' }} className={classes.row}>
                  Establecimiento
                </TableCell>
                <TableCell sx={{ color: 'black' }} className={classes.row}>
                  Actualizar
                </TableCell>
                <TableCell sx={{ color: 'black' }} className={classes.row}>
                  Eliminar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && !error
                ? data.map((item) => (
                  <TableRow sx={{ color: 'black' }} key={item.admin_id}>
                    <TableCell sx={{ color: 'black' }}>
                      {item.username}
                    </TableCell>
                    <TableCell className={classes.cellDesc} sx={{ color: 'black' }}>
                      {item.business_id}
                    </TableCell>
                    <TableCell sx={{ color: 'black' }}>
                      <Button variant="outlined">
                        <Link
                          to={`/admin/addAdmins/${item.business_id}`}
                          state={item.business_id}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          Actualizar
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell sx={{ color: 'black' }}>
                      <Button
                        variant="outlined" s
                        tartIcon={<DeleteIcon />}
                        color='error'
                        onClick={() => handleDelete(item.admin_id)}>
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
                : null}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Box>
  );
}
export default AdminControlComponent