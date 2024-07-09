import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  nav: {
    padding: ".2rem",
    [mq("sm")]: {
      padding: ".5rem",
    },
  },
  navList: {
    listStyle: "disc",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    listStylePosition: "inside",
  },
  navItem: {
    marginBottom: "0.1rem",
  },
  navLink: {
    fontWeight: "bold",
    textTransform: "capitalize",
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#FF4500",
    },
  },
}));
