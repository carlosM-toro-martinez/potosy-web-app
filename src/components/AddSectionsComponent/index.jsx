import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useStyles } from "./AddSection";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import sectionsAddServices from "../../async/services/post/sectionsAddServices";
import sectionsUpdateServices from "../../async/services/put/sectionsUpdateServices";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
    color: "black",
  },
  "& input:invalid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& textarea:valid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
    color: "black",
  },
  "& textarea:invalid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
  },
  "& .MuiInputBase-multiline": {
    color: "black",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
  "& .MuiFormHelperText-root": {
    color: "black",
  },
  "& fieldset": {
    borderColor: "black !important",
  },
});

const AddSection = () => {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const item = location?.state?.item;
  const [sectionData, setSectionData] = useState({
    title: item ? item?.title : "",
    title_en: item ? item?.title_en : "",
    description: item ? item?.description : "",
    description_en: item ? item?.description_en : "",
    image_url: item ? item?.image_url : "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setSectionData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in sectionData) {
        if (key === "image" && sectionData[key] !== null) {
          formData.append(key, sectionData[key]);
        } else {
          formData.append(key, sectionData[key]);
        }
      }
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
      const promiseResult = (await id)
        ? sectionsUpdateServices(id, formData)
        : sectionsAddServices(formData);
      promiseResult
        .then((data) => {
          navigation("/admin/sections");
        })
        .catch((error) => {
          console.error("Error al resolver la promesa:", error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? "editar sección" : "Agregar Nueva Sección"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginBottom: "2rem",
          alignItems: "center",
        }}
      >
        <label
          htmlFor="logoInput"
          style={{ marginBottom: "8px", color: "black" }}
        >
          Por favor, introduce su imagen promocional:
        </label>
        <input
          id="logoInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="image"
          //required
          style={{ marginBottom: "16px", color: "black" }}
        />
      </Box>
      <form className={classes.form} onSubmit={handleSubmit}>
        <ValidationTextField
          helperText="Please enter your Title"
          required
          type="text"
          name="title"
          label="Titulo"
          value={sectionData.title}
          onChange={handleChange}
          sx={{ width: "25rem" }}
        />
        <ValidationTextField
          helperText="Please enter your Title"
          required
          type="text"
          name="title_en"
          label="Titulo Ingles"
          value={sectionData.title_en}
          onChange={handleChange}
          sx={{ width: "25rem" }}
        />
        <ValidationTextField
          helperText="Please enter your description"
          required
          rows={6}
          type="text"
          name="description"
          label="Descripcion"
          multiline
          value={sectionData.description}
          onChange={handleChange}
          sx={{
            width: "25rem",
          }}
        />
        <ValidationTextField
          helperText="Please enter your description"
          required
          rows={6}
          type="text"
          name="description_en"
          label="Descripcion Ingles"
          multiline
          value={sectionData.description_en}
          onChange={handleChange}
          sx={{
            width: "25rem",
          }}
        />
        <Button type="submit" variant="contained" className={classes.button}>
          {id ? "ACTUALIZAR DATOS" : "AGREGAR NUEVO"}
        </Button>
      </form>
    </Container>
  );
};

export default AddSection;
