import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";
import backgroundImage from "../../assets/images/cerro.jpg";
export const useStyles = makeStyles((theme) => ({
  containerStyle: {
    position: "relative",
    overflowX: "hidden",
    overflowY: "hidden",
    marginTop: "4rem",
    display: "flex",
    justifyContent: "space-around",
    height: "30vh",
    flexDirection: "column",
    [mq("md")]: {
      marginTop: "0",
      height: "100vh",
      flexDirection: "row",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.4,
      zIndex: -1,
    },
  },
  shadow: {
    display: "flex",
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h4": {
      fontSize: "1rem",
      color: "black",
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
      textTransform: "uppercase",
      padding: "0 1rem 0 1rem",
    },
    "& h5": {
      fontSize: ".7rem",
      color: "black",
      textAlign: "center",
      textTransform: "capitalize",
      padding: "0 1rem 0 1rem",
    },
    [mq("md")]: {
      "& h4": {
        fontSize: "1.5rem",
      },
      "& h5": {
        fontSize: "1rem",
      },
    },
  },
  carouselContainer: {
    flex: 0.6,
  },
  logosContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  logoPotosy: {
    display: "none",
    width: "150px",
    height: "120px",
    borderRadius: "5px",
    [mq("md")]: {
      display: "block",
      margin: "0 1rem 1rem 1rem",
    },
  },
  logoUnesco: {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    margin: "1rem 1rem 1rem 1rem",
    [mq("md")]: {
      margin: "0 1rem 1rem 1rem",
      width: "150px",
      height: "120px",
    },
  },
}));
