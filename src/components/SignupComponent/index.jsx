import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { useStyles } from "./Signup.styles";
import registerSession from "../../async/services/post/registerSession";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import MuiAlert from "@mui/material/Alert";
import { Snackbar, LinearProgress, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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

function SignupComponent() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useContext(MainContext);
  const classes = useStyles();
  const navigation = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    business_id: state ? state : null,
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password.length > 6) {
        setLoading(true);
        const newData = formData;
        const promiseResult = await registerSession(newData);
        navigation("/establishmentAdmin/socialNet", { state: state });
      } else {
        setLoading(false);
        console.error("La contraseña debe tener al menos 6 caracteres.");
        alert("La contraseña debe tener al menos 6 caracteres.");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("El nombre de usuario ya existe");
    }
  };

  if (!state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      {loading && (
        <div className={classes.loadingOverlay}>
          <Typography style={{ color: "white" }} variant="h6">
            Cargando...
          </Typography>
          <LinearProgress />
        </div>
      )}
      <Typography variant="h4" align="center" gutterBottom>
        Crear Cuenta
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <ValidationTextField
          label="Nombre de Usuario"
          variant="outlined"
          fullWidth
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          helperText="Ingrese su nombre de usuario. Puede contener letras, números y caracteres especiales."
        />
        <ValidationTextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          helperText="Ingrese su contraseña. Debe contener al menos 6 caracteres"
        />
        <Button type="submit" variant="contained" color="primary">
          Registrarse
        </Button>
      </form>
    </Container>
  );
}

export default SignupComponent;
