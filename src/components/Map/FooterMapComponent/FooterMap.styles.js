import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    margin: "2rem 0",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  logo: {
    width: "8rem",
    height: "auto",
    marginBottom: "1rem",
  },
  content: {
    width: "100%",
    padding: "1rem",
    borderRadius: "5px",
  },
  address: {
    marginBottom: "1rem",
  },
  downloadText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#000",
  },
  link: {
    marginLeft: "5px",
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.3rem",
    color: "#000",
  },
  icon: {
    fontSize: "5rem",
  },
  coordinates: {
    marginTop: "0.5rem",
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
  [mq("md")]: {
    card: {
      flexDirection: "column",
    },
  },
}));
