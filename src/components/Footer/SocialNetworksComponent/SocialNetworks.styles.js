import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    backgroundColor: "#000",
    borderRadius: "50%",
    width: "2.3rem",
    height: "2.3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    backgroundColor: "#000",
    transition: "background 0.1s, background-position 0.1s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #000 50%, #1877F2 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
    },
  },
  whatsapp: {
    backgroundColor: "#000",
    transition: "background 0.1s, background-position 0.1s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #000 50%, #25D366 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
    },
  },
  instagram: {
    backgroundColor: "#000",
    transition: "background 0.1s, background-position 0.1s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #000 50%, #FCAF45 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
    },
  },
  youtube: {
    transition: "background 0.1s, background-position 0.1s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #000 50%, #FF0000 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
    },
  },
  X: {
    color: "#fff",
    transition: "background 0.1s, background-position 0.1s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #000 50%, #1DA1F2 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
      color: "#000",
    },
  },
  icon: {
    color: "#fff",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".4rem",
    // [mq("md")]: {
    //   gap: 10,
    //   "& h5": {
    //     fontSize: 15,
    //   },
    // },
  },
}));
