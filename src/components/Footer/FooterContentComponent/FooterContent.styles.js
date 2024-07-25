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
    alignItems: "center",
    textAlign: "center",
    "& h6": {
      fontSize: "1.5rem",
    },
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    color: "#fff",
    listStyleType: "none",
    paddingInlineStart: 0,
    "& li": {
      marginBottom: theme.spacing(1),
    },
  },
  mt2: {
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
    alignItems: "center",
    textAlign: "center",
    gap: "1rem",
    [mq("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
  },
  iconContainer: {
    display: "flex",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  logo: {
    borderRadius: "2rem",
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "200px",
  },
}));
