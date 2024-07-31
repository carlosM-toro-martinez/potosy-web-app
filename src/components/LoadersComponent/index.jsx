import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  loader: {
    position: "relative",
    marginTop: "3rem",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      borderRadius: "inherit",
    },
    "&::before": {
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(0deg, #FF4500 0%, #f3ff00 100%)",
      animation: "$load012323 0.5s infinite linear",
    },
    "&::after": {
      width: "85%",
      height: "85%",
      backgroundColor: "#fff",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  "@keyframes load012323": {
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

function LoadersComponent() {
  const classes = useStyles();

  return <div className={classes.loader}></div>;
}

export default LoadersComponent;
