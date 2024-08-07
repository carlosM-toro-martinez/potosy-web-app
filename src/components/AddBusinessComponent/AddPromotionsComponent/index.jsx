import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useStyles } from "./AddPromotions.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useQuery } from "react-query";
import promotionsUpdateService from "../../../async/services/put/promotionsUpdateService";
import promotionsAddServices from "../../../async/services/post/promotionsAddServices";
import promotionsService from "../../../async/services/promotionsService";
import promotionsDeleteServices from "../../../async/services/delete/promotionsDeleteServices";
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

const AddPromotions = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const { data, isLoading, error, refetch } = useQuery("promotions", () =>
    promotionsService(id ? id : location.state)
  );
  const navigation = useNavigate();
  const business_id = Array.isArray(location.state)
    ? location?.state[0]?.business_id
    : location.state;
  const [promotionsData, setPromotionsData] = useState({
    promotion_details: "",
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
    setPromotionsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const newData = { ...promotionsData, business_id: business_id };

      await promotionsAddServices(newData);
      setLoading(false);
      alert("promocion agregada correctamente");
      event.target.reset();
      refetch();
    } catch (error) {
      console.error(error);
      setSnackbarOpen(true);
    }
  };

  const handleNavigation = () => {
    id
      ? navigation("/establishmentAdmin/home", {
          state: business_id,
        })
      : navigation("/establishmentAdmin/products", { state: location.state });
  };

  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  const deletePromotion = async (idProduct) => {
    try {
      await promotionsDeleteServices(idProduct);
      alert("La promocion se elimino correctamente");
      refetch();
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("La promocion no se pudo eliminar");
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
        {id ? "Editar Promoción" : "Agregar Nueva Promoción"}
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
                <TableRow key={item.promotion_id} sx={{ color: "black" }}>
                  {/* <TableCell sx={{
                    color: 'white', textTransform: 'capitalize', overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '300px'
                  }}>{item?.attributes?.image?.data?.attributes?.url}</TableCell> */}
                  <TableCell
                    sx={{
                      color: "black",
                      textTransform: "capitalize",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: "300px",
                    }}
                  >
                    {item?.promotion_details}
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
                      onClick={() => deletePromotion(item?.promotion_id)}
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
            label="Detalles de la Promoción"
            name="promotion_details"
            value={promotionsData.promotion_details}
            onChange={handleChange}
            required
          />
          <ValidationTextField
            fullWidth
            label="Precio"
            name="price"
            value={promotionsData.price}
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
          Error al ingresar las promociones.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddPromotions;
