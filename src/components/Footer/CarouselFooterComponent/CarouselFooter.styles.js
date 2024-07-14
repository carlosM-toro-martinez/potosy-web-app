import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  containerStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0 1rem 0",
  },
  containerImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "25rem",
    height: "18rem",
    [mq("md")]: {
      width: "32rem",
      height: "20rem",
    },
  },
  image: {
    width: "auto",
    backgroundSize: "cover",
    height: "15rem",
    [mq("md")]: {
      height: "14.8rem",
    },
  },
}));
