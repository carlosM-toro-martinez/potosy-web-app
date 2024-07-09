import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    borderRadius: "50%",
    width: "2.1rem",
    height: "2.1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    background: "#fff",
    transition: "background 0.2s, background-position 0.2s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #fff 50%, #1877F2 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
    },
  },
  whatsapp: {
    background: "#fff",
    transition: "background 0.2s, background-position 0.2s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #fff 50%, #25D366 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
    },
  },
  instagram: {
    background: "#fff",
    transition: "background 0.2s, background-position 0.2s",
    backgroundSize: "100% 200%",
    backgroundImage: "linear-gradient(to bottom, #fff 50%, #FCAF45 50%)",
    "&:hover": {
      cursor: "pointer",
      backgroundPosition: "0 -100%",
    },
  },
  icon: {
    color: "#000",
    fontSize: ".9rem",
    "&:hover": {
      color: "#fff",
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.2rem",
  },
}));
