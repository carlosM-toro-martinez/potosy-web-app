import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";
import backgroundImage from "../../assets/images/cerro.jpg";
export const useStyles = makeStyles((theme) => ({
  containerStyle: {
    position: "absolute",
    backgroundImage: `url(${backgroundImage})`,
    top: 0,
    left: 0,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "30vh",
    filter: "blur(2px)",
    zIndex: 0,
    [mq("md")]: {
      height: "34.5rem",
      flexDirection: "row",
    },
  },
  backgroundImage: {
    overflowX: "hidden",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "3rem",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, .2)",
    borderBottom: ".8rem solid #FF4500",
    zIndex: 1,
    [mq("md")]: {
      height: "33rem",
    },
  },

  shadow: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: "3rem",
    zIndex: 1,
    "& h4": {
      fontSize: "1rem",
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "capitalize",
      textShadow: "4px 4px 6px rgba(0, 0, 0, 0.7)",
    },
    [mq("md")]: {
      "& h4": {
        fontSize: "1.5rem",
      },
    },
  },
  carouselContainer: {
    flex: 0.5,
  },
  logoEncuentra: {
    width: "100px",
    height: "auto",
    margin: "1rem",
    [mq("md")]: {
      width: "150px",
      height: "auto",
    },
  },
  logoPotosy: {
    width: "100px",
    height: "auto",
    margin: "1rem",
    [mq("md")]: {
      width: "150px",
      height: "auto",
    },
  },
  lineHorizontal: {
    width: "100px",
    height: "auto",
    [mq("md")]: {
      width: "100px",
      height: "auto",
    },
  },
  containerTitle: {
    zIndex: 1,
    margin: "1.5rem 0 0 3rem",
    "& h4": {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "3rem",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      textTransform: "capitalize",
    },
  },
}));
