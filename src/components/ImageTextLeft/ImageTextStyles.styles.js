import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "65vh",
    [mq("md")]: {
      height: "100vh",
    },
  },
  wrapper: {
    width: "85%",
  },
  h2: {
    fontFamily: "NotoSerifDisplay_ExtraCondensed-BlackItalic",
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
    color: "#000",
    textAlign: "center",
    marginBottom: "2rem",
    [mq("md")]: {
      fontSize: "2.5rem",
    },
  },
  swiperSlideOpinions: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
