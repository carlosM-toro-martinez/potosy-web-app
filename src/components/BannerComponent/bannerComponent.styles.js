import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";
import { colors } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  containerStyle: {
    height: "19.5rem",
    [mq("md")]: {
      height: "100vh",
      flexDirection: "row",
    },
    position: "relative",
  },
  zoomImageContainer: {
    transition: "transform 0.5s ease-in-out",
    transformOrigin: "center center",
  },
  zoomActive: {
    animation: "$zoomAnimation 10s infinite",
  },
  "@keyframes zoomAnimation": {
    "0%, 100%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
  },
  background: {
    top: 0,
    left: 0,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "19.5rem",
    [mq("md")]: {
      height: "100vh",
      flexDirection: "row",
    },
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4rem",
      background:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .1))",
      pointerEvents: "none",
    },
  },
  backgroundImage: {
    overflowX: "hidden",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "18rem",
    width: "100%",
    [mq("md")]: {
      height: "100vh",
    },
  },
  shadow: {
    overflowX: "hidden",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    gap: "3rem",
    margin: "1.5rem 0 1rem 0",
    "& h4": {
      fontSize: "1rem",
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "capitalize",
      textShadow: "4px 4px 6px rgba(0, 0, 0, 0.7)",
    },
    [mq("md")]: {
      gap: "3rem",
      "& h4": {
        fontSize: "1.5rem",
      },
    },
  },
  containerTitle: {
    position: "absolute",
    margin: "6rem 0 0 6rem",
    zIndex: 100,
    "& h1": {
      fontSize: "1.8rem",
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "capitalize",
      textShadow: "4px 4px 6px rgba(0, 0, 0, 0.7)",
    },
    "& h3": {
      fontSize: ".8rem",
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
      textTransform: "capitalize",
      textShadow: "4px 4px 6px rgba(0, 0, 0, 0.7)",
    },
    [mq("md")]: {
      gap: "3rem",
      "& h1": {
        fontSize: "3rem",
      },
      "& h3": {
        fontSize: "1.5rem",
      },
    },
  },
  start: {
    position: "absolute",
    zIndex: 150,
    bottom: "30%",
    left: "50%",
  },
  subTitle: {
    textAlign: "center",
    display: "inline-block",
    marginTop: "2rem",
    padding: "0 2rem 0 2rem",
  },
  titleHighlight: {
    color: "#FF4500",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  },
  imageContainer: {
    display: "flex",
  },
  imageCard: {
    width: "6rem",
    height: "8rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: ".5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [mq("md")]: {
      width: "9rem",
      height: "11rem",
    },
  },
  iconContainer: {
    width: "20px",
    height: "20px",
    borderRadius: "30px",
    bottom: 0,
    position: "absolute",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "-1.5rem",
    backgroundColor: "#fff",
    [mq("md")]: {
      width: "45px",
      height: "45px",
      borderRadius: "70px",
      display: "flex",
    },
  },
  iconImage: {
    width: "20px",
    height: "20px",
    borderRadius: "25px",
    [mq("md")]: {
      width: "40px",
      height: "40px",
      borderRadius: "65px",
    },
  },
  iconImageLarge: {
    width: "90px",
    height: "90px",
    borderRadius: "100%",
  },
  titleContainer: {
    displa: "flex",
    flexDirection: "column",
    height: "40vh",
    width: "25rem",
    marginBottom: "2rem",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      fontSize: "2rem",
      textAlign: "center",
    },
    [mq("md")]: {
      height: "78vh",
      width: "30rem",
      "& h1": {
        fontSize: "2.5rem",
      },
    },
  },
  worldImage: {
    width: 150,
    [mq("md")]: {
      width: 250,
    },
  },
  "@global": {
    ".image-gallery-bullets .image-gallery-bullet": {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    ".image-gallery-bullets .image-gallery-bullet:hover, .image-gallery-bullets .image-gallery-bullet.active":
      {
        backgroundColor: "#FF4500",
      },
    ".image-gallery-icon:hover": {
      color: "#FF4500",
    },
    ".image-gallery-left-nav:hover, .image-gallery-right-nav:hover": {
      color: "#FF4500",
    },
  },
}));
