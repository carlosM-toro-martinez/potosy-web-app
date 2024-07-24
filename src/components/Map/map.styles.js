import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
    gap: 10,
    [mq("md")]: {
      flexDirection: "row",
    },
  },
  container: {
    top: 0,
    zIndex: 1,
    flex: 1,
    width: "90%",
    height: "50vh",
    margin: "1rem 0 1rem 1rem",
    [mq("md")]: {
      width: "20rem",
      height: "20rem",
    },
  },
  footerContainer: {
    width: "40rem",
  },
  map: {
    marginTop: "1rem",
    zIndex: 1,
    height: "100vh",
    width: "95%",
    [mq("md")]: {
      height: "80vh",
      width: "100%",
    },
  },
}));
