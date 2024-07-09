import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3rem",
    gap: 10,
    [mq("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  container: {
    flex: 0.5,
    width: "100%",
    height: "50vh",
    margin: "1rem 0 1rem 1rem",
    [mq("md")]: {
      width: "20rem",
      height: "20rem",
    },
  },
  footerContainer: {
    flex: 0.5,
  },
  map: {
    height: "50vh",
    width: "95%",
    [mq("md")]: {
      height: "80vh",
      width: "100%",
    },
  },
}));
