import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5rem 0 2rem 0rem",
    "& h4": {
      fontSize: "1.8rem",
      margin: "0 0 4rem 0",
      color: "black",
      fontWeight: "bold",
      padding: "0 1.5rem 0 1.5rem",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    },
    [mq("md")]: {
      margin: "3rem 0 8rem 2rem",
      maxWidth: "90rem",
      "& h4": {
        fontSize: "3rem",
        padding: "1rem 0 1rem 0",
      },
    },
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h5": {
      fontSize: "1rem",
      margin: "1rem 0 0 0",
      color: "#CC3700",
      fontWeight: "bold",
      padding: "0 2rem 0 2rem",
      textAlign: "center",
      textTransform: "capitalize",
      fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    },
    "& h6": {
      fontSize: ".7rem",
      marginTop: ".5rem",
      padding: "0 1rem 0 1rem",
      textAlign: "justify",
      color: "#404040",
      lineHeight: 1.2,
    },
    [mq("md")]: {
      "& h5": {
        fontSize: "1.5rem",
        padding: "1rem 8rem 0rem 8rem",
        fontWeight: "bold",
        margin: "0 0 2rem 0",
        textAlign: "center",
        letterSpacing: 0.5,
      },
      "& h6": {
        fontSize: "1rem",
        padding: "0 15rem 0 15rem",
      },
    },
  },
  titleSecctions: {
    color: "#FFDAB9",
    textAlign: "center",
    fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    marginTop: "1rem",
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  video: {
    marginTop: "2rem",
    width: 370,
    height: 300,
    [mq("md")]: {
      width: 560,
      height: 315,
    },
  },
  newBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-1rem",
  },

  swiper: {
    position: "relative",
    width: "100%",
    maxWidth: "100vw",
    overflow: "hidden",
    "& .swiper-slide": {
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "300px",
      height: "300px",
      "& img": {
        display: "block",
        width: "100%",
        height: "auto",
        maxHeight: "25rem",
      },
      [mq("xxs")]: {
        width: "100px",
        height: "100px",
      },
      [mq("xs")]: {
        width: "250px",
        height: "250px",
      },
      [mq("sm")]: {
        width: "300px",
        height: "300px",
      },
      [mq("lg")]: {
        width: "300px",
        height: "300px",
      },
    },

    [mq("sm")]: {
      maxWidth: "100%",
      "& .swiper-wrapper": {
        maxWidth: "800px",
      },
    },
    [mq("lg")]: {
      maxWidth: "850px",
      "& .swiper-wrapper": {
        width: "1400px",
      },
    },
  },
  swiperContiner: {
    borderRadius: "1rem",
  },

  image: {
    borderRadius: "1rem",
  },
}));
