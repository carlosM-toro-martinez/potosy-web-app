import { makeStyles } from "@material-ui/core";
import mq from "../../config/mq";

export const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    padding: "5rem 1rem 3rem 1rem",
  },
  card: {
    backgroundColor: "white",
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    padding: "3rem",
  },
  icon: {
    fontSize: "4rem",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
}));
