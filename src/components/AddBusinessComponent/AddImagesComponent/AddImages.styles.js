import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "4rem",
    width: "50rem",
    "& h4": {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase",
      marginTop: theme.spacing(8),
    },
  },
  form: {
    display: "flex",
    width: "100%",
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
    color: "black",
    marginBottom: "8px",
  },
  formInput: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginBottom: "2rem",
  },
  buttonFinish: {
    marginTop: "2rem",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));
