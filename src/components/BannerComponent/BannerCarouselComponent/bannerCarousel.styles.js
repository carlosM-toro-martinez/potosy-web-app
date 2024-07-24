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
      width: "13rem",
      height: "15rem",
    },
  },
  swiperSlide: {
    height: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    borderRadius: "1rem",
    [mq("md")]: {
      width: "13rem",
      height: "15rem",
    },
  },
  image: {
    width: "5rem",
    height: "5rem",
    borderRadius: "1rem",
    [mq("md")]: {
      width: "13rem",
      height: "15rem",
    },
  },
}));
