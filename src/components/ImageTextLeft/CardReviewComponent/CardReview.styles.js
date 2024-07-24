import { makeStyles } from "@material-ui/core";
import mq from "../../../config/mq"; // Ajusta la ruta según tu estructura de archivos

export const useStyles = makeStyles((theme) => ({
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
  nameReviewer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "298px",
    backgroundColor: "rgba(0, 0, 0, .3)",
    position: "absolute",
    zIndex: 100,
    marginTop: "11rem",
    paddingLeft: "1rem",
  },
  name: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
  },
  placeReviewer: {
    fontSize: "0.875rem",
    color: "#fff",
  },
  image: {
    width: "315px",
    height: "230px",
    objectFit: "cover",
    zIndex: 0,
    borderRadius: "8px",
  },
  date: {
    fontSize: "0.75rem",
    color: "#999",
    marginBottom: "8px",
  },
  place: {
    fontSize: "0.875rem",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  opinion: {
    fontSize: "0.7rem",
    marginBottom: "8px",
    textAlign: "start",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "all 0.3s ease",
  },
  expandedOpinion: {
    WebkitLineClamp: "unset",
    overflow: "visible",
  },
  source: {
    fontSize: "0.75rem",
    color: "#ff4500",
    textDecoration: "none",
    textAlign: "center",
    width: "100%",
    marginTop: "1rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "90%",
    paddingBottom: "1rem",
  },
  [mq("md")]: {
    // card: {
    //   maxWidth: "100%",
    // },
    // image: {
    //   width: "60px",
    //   height: "60px",
    // },
  },
}));
