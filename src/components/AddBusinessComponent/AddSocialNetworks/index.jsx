import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useStyles } from "./AddSocialNetworks.styles";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import socialNetUpdateService from "../../../async/services/put/socialNetUpdateService";
import socialNetAddServices from "../../../async/services/post/socialNetAddServices";
import MuiAlert from "@mui/material/Alert";
import { Snackbar, LinearProgress } from "@mui/material";

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddSocialNetworks = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const [socialNetworksData, setSocialNetworksData] = useState({
    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    tiktok_url: "",
    whatsapp_number: "",
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSocialNetworksData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const business_id = Array.isArray(location.state)
        ? location?.state[0]?.business_id
        : location.state;
      const newData = { ...socialNetworksData, business_id: business_id };
      const promiseResult = (await id)
        ? socialNetUpdateService(id, newData)
        : socialNetAddServices(newData);
      promiseResult
        .then((data) => {
          id
            ? navigation("/establishmentAdmin/home", {
                state: business_id,
              })
            : navigation("/establishmentAdmin/promotions", {
                state: location.state,
              });
        })
        .catch((error) => {
          console.error("Error al resolver la promesa:", error);
        });
    } catch (error) {
      console.error(error);
      setSnackbarOpen(true);
    }
  };

  useEffect(() => {
    if (location?.state) {
      setSocialNetworksData({
        facebook_url: location?.state[0]?.socialnetworks[0]?.facebook_url,
        instagram_url: location?.state[0]?.socialnetworks[0]?.instagram_url,
        twitter_url: location?.state[0]?.socialnetworks[0]?.twitter_url,
        tiktok_url: location?.state[0]?.socialnetworks[0]?.tiktok_url,
        whatsapp_number: location?.state[0]?.socialnetworks[0]?.whatsapp_number,
      });
    }
  }, []);
  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <Typography style={{ color: "black" }} variant="h6">
            Cargando...
          </Typography>
          <LinearProgress />
        </div>
      )}
      <Typography variant="h4" align="center" gutterBottom>
        {id ? "Editar Redes Sociales" : "Agregar Nuevas Redes Sociales"}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ValidationTextField
            fullWidth
            label="Facebook URL"
            name="facebook_url"
            value={socialNetworksData.facebook_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="Instagram URL"
            name="instagram_url"
            value={socialNetworksData.instagram_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="Twitter URL"
            name="twitter_url"
            value={socialNetworksData.twitter_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="TikTok URL"
            name="tiktok_url"
            value={socialNetworksData.tiktok_url}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="Número de WhatsApp"
            name="whatsapp_number"
            value={socialNetworksData.whatsapp_number}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="contained" className={classes.button}>
          {id ? "Actualizar Datos" : "Agregar Nuevas"}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          Error al ingresar las redes sociales.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddSocialNetworks;
