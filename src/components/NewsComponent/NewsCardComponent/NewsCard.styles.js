import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  containerText: {
    "& h5": {
      fontSize: 20,
      fontWeight: "bold",
    },
    "& p": {
      marginTop: "0.5rem",
      fontSize: 14,
    },
  },
  card: {
    display: "flex",
    width: "20rem",
    cursor: "pointer",
    height: "10rem",
    border: "solid",
    borderColor: "gray",
    borderWidth: "1px",
    boxShadow: "0 4px 8px rgba(255, 0, 0, 0.5)",
    "&:hover": {
      boxShadow: "0 8px 16px rgba(255, 0, 0, 0.7)",
    },
  },
  mediaBox: {
    width: "50%",
    height: "100%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  titleText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    color: "#FF4500",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  descriptionText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    color: "black",
  },
}));
