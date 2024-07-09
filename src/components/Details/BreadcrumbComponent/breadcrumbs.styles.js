import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq";

export const useStyles = makeStyles((theme) => ({
  breadcrumbContainer: {
    marginTop: "4rem",
    marginBottom: "-3rem",
    [mq("sm")]: {
      marginTop: "1.5rem",
      marginBottom: "-1.5rem",
    },
  },
  text: {
    textTransform: "capitalize",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
