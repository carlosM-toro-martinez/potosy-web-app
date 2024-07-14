import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  container: {
    "& h2": {
      fontWeight: "bold",
      marginTop: "2rem",
      color: "black",
      fontSize: "3rem",
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
      textAlign: "center",
    },
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1rem 0.5rem 1rem",
    color: "black",
    "& h2": {
      color: "black",
      fontSize: "1.5rem",
      marginBottom: ".5rem",
      fontWeight: "bold",
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
      textTransform: "uppercase",
      textAlign: "center",
    },
    "& h3": {
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
      fontSize: "1.5rem",
      marginTop: "1rem",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    "& h4": {
      textAlign: "center",
      textTransform: "capitalice",
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    },
    [mq("md")]: {
      marginTop: "1rem",
      padding: "0 1rem 0 1rem",
      alignItems: "center",
      "& h2": {
        marginTop: "1rem",
        fontSize: "3rem",
        padding: "1rem 0 0rem 0",
      },
      "& h3": {
        fontSize: "2rem",
      },
    },
  },
  information: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& h6": {
      marginTop: "1.5rem",
      marginBottom: ".5rem",
      fontSize: ".7rem",
      padding: "0 1rem 0 0",
      color: "rgba(0, 0, 0, 0.7)",
    },
    [mq("md")]: {
      width: "80%",
      justifyContent: "space-between",
      gap: 10,
      "& h6": {
        fontSize: "1rem",
        padding: "0 1rem 0 5rem",
      },
    },
  },
  dataContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    [mq("md")]: {
      width: "65%",
    },
  },
  infoText: {
    display: "flex",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
  },
  openingHours: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    "& h3": {
      fontSize: ".8rem",
      marginTop: "1rem",
      fontWeight: "bold",
    },
    [mq("md")]: {
      gap: 40,
      "& h3": {
        fontSize: "1rem",
      },
    },
  },
  containerProducts: {
    marginTop: "2rem",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItmes: "center",
    justifyContent: "space-around",
    [mq("md")]: {
      flexDirection: "row",
    },
  },
}));
