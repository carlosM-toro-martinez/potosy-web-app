import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "4rem",
    position: "relative",
    padding: "0 5rem 0 10rem",
    "& h4": {
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
    },
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: theme.zIndex.drawer + 1,
  },
  form: {
    display: "flex",
    width: "85%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  formField: {
    marginTop: theme.spacing(8),
    "& .MuiInputBase-input": {
      color: "#ffffff",
    },
    "& .MuiInputLabel-root": {
      color: "#ffffff",
    },
  },

  formLabel: {
    color: "white",
    marginBottom: "8px",
  },
  formInput: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginBottom: "2rem",
  },
}));
