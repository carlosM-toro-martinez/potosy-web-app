import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./AddImages.styles";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import imagesAddServices from "../../../async/services/post/imagesAddServices";
import loginSession from "../../../async/services/post/loginSession";
import { MainContext } from "../../../context/MainContext";
import imagesOneBusiness from "../../../async/services/imagesOneBusiness";
import imagesDeleteServices from "../../../async/services/delete/imagesDeleteServices";
import { useQuery } from "react-query";

const AddImages = () => {
  const classes = useStyles();
  const { setAuth, setToken, user } = useContext(MainContext);
  const { id } = useParams();
  const location = useLocation();
  const { data, isLoading, error, refetch } = useQuery(
    "imagesOneBusiness",
    () => imagesOneBusiness(id ? id : location.state)
  );
  const navigation = useNavigate();
  const [imagesData, setImagesData] = useState({
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleChange = (event) => {
    const { name, files } = event.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setSelectedImage(file);
      } else {
        setSelectedImage(null);
        setPreviewUrl(null);
      }
    }
    setImagesData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", imagesData.image);
      formData.append("business_id", id ? id : location.state);
      await imagesAddServices(formData);
      setLoading(false);
      alert("Imagen agregada correctamente");
      event.target.reset();
      refetch();
    } catch (error) {
      alert("Error al agregar la imagen");
      setLoading(false);
      console.error(error);
    }
  };

  const handleNavigation = async () => {
    if (user && !id) {
      const login = await loginSession(user);
      setToken(login.token);
      setAuth(true);
    }
    navigation("/establishmentAdmin/home", { state: id ? id : location.state });
  };

  const deleteImage = async (idImage, url) => {
    try {
      const fileName = url.substring(url.lastIndexOf("/") + 1);
      await imagesDeleteServices(idImage, fileName);
      alert("La imagen se elimino correctamente");
      refetch();
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("La imagen no se pudo eliminar");
    }
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? "Editar Imágenes" : "Agregar Nueva Imagen"}
      </Typography>
      <Table
        sx={{
          marginBottom: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              color: "black",
            }}
          >
            <TableCell sx={{ color: "black" }}>Imagen</TableCell>
            <TableCell sx={{ color: "black" }}>Eliminar Imagen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !error
            ? data.map((item) => (
                <TableRow key={item.image_id} sx={{ color: "black" }}>
                  <TableCell>
                    <img
                      src={item.image_url}
                      alt={`Image ${item.image_id}`}
                      style={{
                        width: "150px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => deleteImage(item.image_id, item.image_url)}
                      sx={{
                        backgroundColor: "#FF4500",
                        "&:hover": {
                          backgroundColor: "#FF4500",
                        },
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            borderWidth: "2px",
            borderRadius: "2px",
            borderColor: "#eeeeee",
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
            color: "#bdbdbd",
            transition: "border .24s ease-in-out",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="image"
            required
            style={{ display: "none" }}
          />
          <Typography variant="body1" color="textSecondary">
            Hacer clic para seleccionar
          </Typography>
        </Box>
        {previewUrl && (
          <div>
            <img
              src={previewUrl}
              alt="Selected Preview"
              style={{ width: "300px", height: "auto" }}
            />
          </div>
        )}
        {loading ? (
          <Button disabled={true}>cargando ...</Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
            sx={{
              backgroundColor: "#FF4500",
              "&:hover": {
                backgroundColor: "#FF4500",
              },
            }}
          >
            Agregar
          </Button>
        )}
        <Button
          className={classes.buttonFinish}
          onClick={handleNavigation}
          sx={{ color: "#FF4500" }}
        >
          Terminar
        </Button>
      </form>
    </Container>
  );
};

export default AddImages;
