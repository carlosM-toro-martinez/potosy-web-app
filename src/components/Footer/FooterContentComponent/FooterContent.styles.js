import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  primaryText: {
    color: "#fff",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    color: "#fff",
    listStyleType: "disc",
    paddingInlineStart: theme.spacing(2),
  },
  mt2: {
    marginTop: "-2rem",
    marginTop: theme.spacing(2),
    color: "#fff",
  },
  container: {
    backgroundColor: "#5D5D5D",
    color: theme.palette.text.primary,
    padding: theme.spacing(5),
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  iconContainer: {
    display: "flex",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));
