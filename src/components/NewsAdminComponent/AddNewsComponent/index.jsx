import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useStyles } from "./AddNews.styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import newsAddService from "../../../async/services/post/newsAddServices";
import newsUpdateServices from "../../../async/services/put/newsUpdateServices";

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

const AddNewsComponent = () => {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const item = location?.state?.item;
  const navigation = useNavigate();
  const [newsData, setNewsData] = useState({
    title: item ? item?.title : "",
    title_en: item ? item?.title_en : "",
    description: item ? item?.description : "",
    description_en: item ? item?.description_en : "",
    promotional_image_url: item ? item?.promotional_image_url : "",
    address: item ? item?.address : "",
    time: item ? item?.time : "",
    date: item ? item?.date : "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setNewsData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in newsData) {
        if (key === "image" && newsData[key] !== null) {
          formData.append(key, newsData[key]);
        } else {
          formData.append(key, newsData[key]);
        }
      }
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
      const promiseResult = (await id)
        ? newsUpdateServices(id, formData)
        : newsAddService(formData);
      promiseResult
        .then((data) => {
          navigation("/admin/news");
        })
        .catch((error) => {
          console.error("Error al resolver la promesa:", error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handleReturn = () => {
    navigation("/admin/news");
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? "editar Noticia" : "Agregar Nueva noticia"}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
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
            required
            style={{ marginBottom: "16px", color: "black" }}
          />
        </Box>
        <ValidationTextField
          helperText="Please enter your title news"
          required
          type="text"
          name="title"
          label="Titulo"
          value={newsData.title}
          onChange={handleChange}
          sx={{ width: "25rem" }}
        />
        <ValidationTextField
          helperText="Please enter your title news"
          required
          type="text"
          name="title_en"
          label="Titulo ingles"
          value={newsData.title_en}
          onChange={handleChange}
          sx={{ width: "25rem" }}
        />
        <ValidationTextField
          helperText="Por Favor ingrese una descripcion"
          required
          rows={6}
          type="text"
          name="description"
          label="Descripcion"
          multiline
          value={newsData.description}
          onChange={handleChange}
          sx={{
            width: "25rem",
          }}
        />

        <ValidationTextField
          helperText="Por Favor ingrese una descripcion"
          required
          rows={6}
          type="text"
          name="description_en"
          label="Descripcion inglish"
          multiline
          value={newsData.description_en}
          onChange={handleChange}
          sx={{
            width: "25rem",
          }}
        />

        <ValidationTextField
          helperText="Por favor, ingrese la dirección"
          required
          type="text"
          name="address"
          label="Dirección"
          value={newsData.address}
          onChange={handleChange}
          sx={{ width: "25rem" }}
        />

        <ValidationTextField
          helperText="Por favor, ingrese la hora"
          required
          type="time"
          name="time"
          value={newsData.time}
          onChange={handleChange}
          sx={{ width: "25rem" }}
        />

        <ValidationTextField
          helperText="Por favor, ingrese la fecha"
          required
          type="date"
          name="date"
          value={newsData.date}
          onChange={handleChange}
          sx={{ width: "25rem" }}
        />

        <Button type="submit" variant="contained" className={classes.button}>
          {id ? "ACTUALIZAR DATOS" : "AGREGAR NUEVO"}
        </Button>
        <Button className={classes.button} onClick={handleReturn}>
          Volver Atras
        </Button>
      </form>
    </Container>
  );
};

export default AddNewsComponent;
