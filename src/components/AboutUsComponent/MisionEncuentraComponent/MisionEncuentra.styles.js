import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";
import background from "../../../assets/logos/3.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5rem 3rem 3rem 3rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [mq("md")]: {
      flexDirection: "row",
    },
  },
  containerText: {
    position: "relative",
    padding: theme.spacing(2),
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${background})`,
      backgroundSize: "50%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: 0.1, // Opacidad para marca de agua
      zIndex: -1,
    },
  },
  title: {
    marginBottom: theme.spacing(1),
    textTransform: "capitalize",
  },
  paragraph: {
    display: "inline-block",
    fontSize: ".8rem",
    marginTop: ".5rem",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    margin: theme.spacing(1),
  },
}));
