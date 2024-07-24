import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem 0 2rem 0",
    backgroundColor: "#F3F3F3",
    overflowX: "hidden",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem",
    maxWidth: "68rem",
  },
  carouselContainer: {
    display: "none",
    flex: 0.5,
    [mq("md")]: {
      display: "flex",
      flex: 0.5,
    },
  },
  dataContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    [mq("md")]: {
      flex: 0.5,
    },
  },
  h2: {
    fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    color: "#000",
    textAlign: "center",
    textTransform: "capitalize",
    [mq("md")]: {
      fontSize: "2.5rem",
    },
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
  },
  button: {
    margin: "0.5rem",
    backgroundColor: "#CC3700",
    color: "#fff",
    width: "16rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#CC3700",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    [mq("md")]: {
      width: "90%",
    },
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    fontSize: ".7rem",
  },
  font: {
    marginBottom: "1rem",
    marginRight: "1rem",
  },
  closeButton: {
    marginTop: "1rem",
    backgroundColor: "#CC3700",
    "&:hover": {
      backgroundColor: "#CC3700",
    },
  },
}));
