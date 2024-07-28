import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "3rem",
    gap: 10,
    [mq("md")]: {
      marginTop: "2.5rem",
      flexDirection: "row",
    },
  },
  container: {
    top: 0,
    zIndex: 1,
    flex: 1,
    width: "100%",
    height: "50vh",
    margin: "0 0 0 0",
    [mq("md")]: {
      width: "20rem",
      height: "20rem",
      margin: "1rem 0 1rem 1rem",
    },
  },
  footerContainer: {
    width: "25rem",
    [mq("md")]: {
      width: "40rem",
    },
  },
  map: {
    marginTop: "1rem",
    zIndex: 1,
    height: "60vh",
    width: "100%",
    [mq("md")]: {
      height: "85vh",
      width: "100%",
    },
  },
}));
