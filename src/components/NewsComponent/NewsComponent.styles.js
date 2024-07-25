import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  Container: {
    padding: "5rem 0 2rem 0",
    color: "#FFDAB9",
    "& h2": {
      color: "black",
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: "1.8rem",
      marginBottom: "2rem",
      fontWeight: "bold",
    },
    [mq("md")]: {
      "& h2": {
        fontSize: "3rem",
        marginBottom: "2rem",
        padding: "1rem 0 1rem 0",
        textAlign: "center",
        padding: theme.spacing(1),
      },
    },
  },
  containerDesktop: {
    display: "none",
    [mq("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  containerMovile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [mq("md")]: {
      display: "none",
    },
  },
}));
