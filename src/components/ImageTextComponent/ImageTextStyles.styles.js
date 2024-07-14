import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem",
  },
  carouselContainer: {
    flex: 0.5,
  },
  dataContainer: {
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h2: {
    fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    color: "#CC3700",
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
    width: "80%",
    textAlign: "center",
  },
  closeButton: {
    marginTop: "1rem",
    backgroundColor: "#CC3700",
    "&:hover": {
      backgroundColor: "#CC3700",
    },
  },
}));
