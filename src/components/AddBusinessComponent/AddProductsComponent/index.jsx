import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useStyles } from "./AddProducts.styles";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery } from "react-query";
import productsUpdateService from "../../../async/services/put/productsUpdateService";
import productsAddServices from "../../../async/services/post/productsAddServices";
import productsService from "../../../async/services/productsService";
import productsDeleteServices from "../../../async/services/delete/productsDeleteServices";
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

const AddProducts = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const business_id = Array.isArray(location.state)
    ? location?.state[0]?.business_id
    : location.state;
  const navigation = useNavigate();
  const { data, isLoading, error, refetch } = useQuery("products", () =>
    productsService(id ? id : location.state)
  );
  const item = location?.state?.item;
  const [productsData, setProductsData] = useState({
    product_details: "",
    price: "",
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const newData = { ...productsData, business_id: business_id };
      await productsAddServices(newData);
      setLoading(false);
      alert("producto agregada correctamente");
      event.target.reset();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigation = () => {
    id
      ? navigation("/establishmentAdmin/home", {
          state: business_id,
        })
      : navigation("/establishmentAdmin/openinghours", {
          state: location.state,
        });
  };

  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  const deleteProduct = async (idProduct) => {
    try {
      await productsDeleteServices(idProduct);
      alert("El producto se elimino correctamente");
      refetch();
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("El producto no se pudo eliminar");
    }
  };

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
        {id ? "Editar Producto" : "Agregar Nueva Producto"}
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
            <TableCell sx={{ color: "black" }}>Detalle</TableCell>
            <TableCell sx={{ color: "black" }}>Precio</TableCell>
            <TableCell sx={{ color: "black" }}>Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !error
            ? data.map((item) => (
                <TableRow key={item.product_id} sx={{ color: "black" }}>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    {item?.product_details}
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    {item?.price}
                  </TableCell>
                  <TableCell
                    sx={{ color: "black", textTransform: "capitalize" }}
                  >
                    <Button
                      color="error"
                      onClick={() => deleteProduct(item?.product_id)}
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ValidationTextField
            fullWidth
            label="Detalles de el Producto"
            name="product_details"
            value={productsData.product_details}
            onChange={handleChange}
            required
          />
          <ValidationTextField
            fullWidth
            label="Precio"
            name="price"
            value={productsData.price}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="contained" className={classes.button}>
          Agregar
        </Button>
        <Button className={classes.buttonFinish} onClick={handleNavigation}>
          {id ? "Terminar" : "Siguiente"}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          Error al ingresar Los productos.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddProducts;
