import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useStyles } from './AddSection';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import sectionsAddServices from '../../async/services/post/sectionsAddServices';
import sectionsUpdateServices from '../../async/services/put/sectionsUpdateServices';

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


const AddSection = () => {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const item = location?.state?.item;
  const [sectionData, setSectionData] = useState({
    title: item ? item?.title : '',
    description: item ? item?.description : '',
    image_url: item ? item?.image_url : '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setSectionData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in sectionData) {
        if (key === 'image' && sectionData[key] !== null) {
          formData.append(key, sectionData[key]);
        } else {
          formData.append(key, sectionData[key]);
        }
      }
      const promiseResult = await id ?
        sectionsUpdateServices(id, formData) :
        sectionsAddServices(formData)
      promiseResult.then((data) => {
        navigation('/admin/sections')
      }).catch((error) => {
        console.error('Error al resolver la promesa:', error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'editar sección' : 'Agregar Nueva Sección'}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: '2rem', alignItems: 'center' }}>
        <label htmlFor="logoInput" style={{ marginBottom: '8px', color: 'white' }}>
          Por favor, introduce su imagen promocional:
        </label>
        <input
          id="logoInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="image"
          //required
          style={{ marginBottom: '16px', color: 'white' }}
        />
      </Box>
      <form className={classes.form} onSubmit={handleSubmit}>
        <ValidationTextField
          helperText="Please enter your name"
          required
          type="text"
          name="title"
          label="Titulo"
          value={sectionData.title}
          onChange={handleChange}
          sx={{ width: '25rem' }}

        />
        <ValidationTextField
          helperText="Please enter your name"
          required
          rows={6}
          type="text"
          name="description"
          label="Descripcion"
          multiline
          value={sectionData.description}
          onChange={handleChange}
          sx={{
            width: '25rem',
          }}

        />
        <Button
          type='submit'
          variant="outlined"
          className={classes.button}
        >
          {id ? 'ACTUALIZAR DATOS' : 'AGREGAR NUEVO'}
        </Button>
      </form>
    </Container>
  );
};

export default AddSection;
