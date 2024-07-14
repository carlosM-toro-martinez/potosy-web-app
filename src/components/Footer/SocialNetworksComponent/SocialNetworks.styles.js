import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    transition: "background 0.1s, background-position 0.1s",
    "&:hover": {
      cursor: "pointer",
      color: "#1877F2",
    },
  },
  whatsapp: {
    transition: "background 0.1s, background-position 0.1s",
    "&:hover": {
      cursor: "pointer",
      color: "#25D366",
    },
  },
  instagram: {
    transition: "background 0.1s, background-position 0.1s",
    "&:hover": {
      cursor: "pointer",
      color: "#FCAF45",
    },
  },
  youtube: {
    transition: "background 0.1s, background-position 0.1s",
    "&:hover": {
      cursor: "pointer",
      color: "#FF0000",
    },
  },
  X: {
    transition: "background 0.1s, background-position 0.1s",
    "&:hover": {
      cursor: "pointer",
      color: "#1DA1F2",
    },
  },
  icon: {
    color: "#fff",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".8rem",
    // [mq("md")]: {
    //   gap: 10,
    //   "& h5": {
    //     fontSize: 15,
    //   },
    // },
  },
}));
