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
import { useStyles } from './sectionList.styles';
import DeleteIcon from '@mui/icons-material/Delete';
import background from '../../assets/images/background.jpg';
import { useQuery } from 'react-query';
import sectionsService from '../../async/services/sectionsService';
import sectionsDeleteServices from '../../async/services/delete/sectionsDeleteServices';
import { Typography } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, useNavigate } from 'react-router-dom';

function SectionList() {
  const navigation = useNavigate();
  const { data, isLoading, isError, error, refetch } = useQuery(`sectionsAdmin`, () => sectionsService());

  const handleNavigation = (route) => {
    navigation(`/admin/${route}`)
  }

  const handleDelete = async (idSection) => {
    try {
      await sectionsDeleteServices(idSection);
      refetch();
    } catch (error) {
      console.error(error);
    }
  }
  //const { data, isLoading, isError, error } = useQuery(`business`, () => sectionsService());
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
          <Typography variant='h3' >apartados</Typography>
          <Button
            variant="outlined"
            startIcon={<AddCircleIcon />}
            className={clasess.button}
            onClick={() => handleNavigation('addSections')}
          >
            AGREGAR NUEVO
          </Button>
          <Table sx={{ width: '50rem' }} className={clasess.table}>
            <TableHead>
              <TableRow sx={{
                color: 'white'
              }}>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>id</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>Nombre</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>Description</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>actualizar</TableCell>
                <TableCell sx={{ color: 'white' }} className={clasess.row}>Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && !error ? data?.map(item => (
                <TableRow sx={{ color: 'white' }}>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.section_id}</TableCell>
                  <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.title}</TableCell>
                  <TableCell className={clasess.cellDesc} sx={{ color: 'white' }}>{item?.description}</TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <Button
                      variant="outlined">
                      <Link
                        to={`/admin/addSections/${item.section_id}`}
                        state={{ item }}
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                        Actualizar
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      color='error'
                      onClick={() => handleDelete(item.section_id)}>
                      Delete
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

export default SectionList