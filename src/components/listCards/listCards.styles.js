import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  boxShadow: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  descriptionSection: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& h5": {
      marginTop: "1rem",
      fontSize: ".8rem",
      width: "50%",
      padding: "1rem 0 1rem 0",
      textAlign: "center",
      fontWeight: "bold",
      padding: theme.spacing(1),
      color: "black",
      textTransform: "capitalize",
    },
    [mq("md")]: {
      "& h5": {
        fontSize: "2.5rem",
        letterSpacing: ".1rem",
      },
    },
  },
  description: {
    color: "#5B5B5B",
    fontSize: ".8rem",
    width: "70%",
    padding: "1rem 0 1rem 0",
    textAlign: "center",
    padding: theme.spacing(1),
    color: "black",
    textTransform: "capitalze",
    [mq("md")]: {
      fontSize: "1.2rem",
      letterSpacing: ".1rem",
    },
  },
  containerDesktop: {
    display: "none",
    [mq("md")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  containerMovil: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    [mq("md")]: {
      display: "none",
    },
  },
}));
