import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
import { BackHand } from "@mui/icons-material";

export const useStyles = makeStyles((theme) => ({
  app: {
    display: "none",
    [mq("sm")]: {
      marginTop: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  swiper: {
    width: "22rem",
    [mq("md")]: {
      width: "30rem",
      height: "25rem",
    },
  },
  swiperSlide: {
    height: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: ".15rem solid #000",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    [mq("md")]: {
      width: "32rem",
      height: "25rem",
    },
  },
  image: {
    width: "5rem",
    height: "5rem",
    [mq("md")]: {
      width: "32rem",
      height: "25rem",
    },
  },
}));
