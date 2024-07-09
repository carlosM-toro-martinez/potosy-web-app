import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  app: {
    display: "none",
    height: "70vh",
    [mq("sm")]: {
      marginTop: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
  },
  swiper: {
    width: "22rem",
    [mq("md")]: {
      width: "30rem",
    },
  },
  swiperSlide: {
    height: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "18px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    [mq("md")]: {
      height: "83vh",
    },
  },
  image: {
    borderRadius: "18px",
    width: "5rem",
    height: "5rem",
    [mq("md")]: {
      width: "90%",
      height: "auto",
    },
  },
}));
