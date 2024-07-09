import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  containerWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "41vh",
    margin: "auto",
    [mq("md")]: {
      margin: "1rem 0 0 0",
      height: "96vh",
      width: "100%",
    },
  },
  containerWrapFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "41vh",
    margin: "auto",
    [mq("md")]: {
      margin: "1rem 0 0 0",
      height: "60vh",
      width: "100%",
    },
  },
  container: {
    height: "280px",
    width: "400px",
    margin: "auto",
    overflow: "hidden",
    backgroundColor: "black",
    [mq("md")]: {
      height: "450px",
      width: "650px",
    },
  },
  containerFooter: {
    height: "250px",
    width: "400px",
    margin: "auto",
    overflow: "hidden",
    backgroundColor: "black",
    [mq("md")]: {
      height: "250px",
      width: "450px",
    },
  },
  imageContainerFullScreen: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "auto",
    height: "100vh",
    display: "block",
  },
}));
