import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  containerText: {
    "& h5": {
      fontSize: 20,
    },
    "& p": {
      marginTop: "0.5rem",
      fontSize: 14,
    },
  },
}));
