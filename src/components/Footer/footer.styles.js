import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "2rem",
    width: "100%",
    "& h5": {
      fontSize: 20,
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
      marginTop: "1rem",
      textAlign: "center",
      fontWeight: "bold",
      color: "black",
      textTransform: "capitalize",
    },
    [mq("md")]: {
      "& h5": {
        fontSize: 30,
        marginBottom: "2rem",
      },
    },
  },
  container: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "15rem",
    width: "100%",
    position: "relative",
    [mq("md")]: {
      height: "25rem",
    },
  },
  footer: {
    display: "flex",
    width: "100%",
    height: "3rem",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  containerImage: {
    width: "100%",
    borderTop: "1px solid black",
    borderRight: "none",
    borderBottom: "none",
    borderLeft: "none",
    display: "flex",
    marginTop: ".5rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [mq("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
  containerFooter: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#3C3C3C",
  },
  image: {
    width: "150px",
    height: "auto",
    borderRadius: "10px",
    [mq("md")]: {
      width: "200px",
      height: "180px",
    },
  },
  link: {
    fontSize: 30,
    color: "#FF4500",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    "&:hover": {
      color: "#000",
      textDecoration: "underline",
    },
  },
  containerLinks: {
    display: "none",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    "& h5": {
      fontSize: 10,
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
      textAlign: "center",
      textDecoration: "none",
      fontWeight: "bold",
      color: "black",
      textTransform: "uppercase",
    },
    [mq("md")]: {
      display: "flex",
      gap: 10,
      "& h5": {
        fontSize: 15,
      },
    },
  },
  icon: {
    color: "#fff",
  },
}));
