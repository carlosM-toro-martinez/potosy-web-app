import * as React from "react";
import { Box, Paper } from "@mui/material";
import { useStyles } from "./CardsContact.styles";
//import infotourImage from '../../../assets/icons/infotur.jpg'
import { useNavigate } from "react-router-dom";
import MapInfo from "../MapInfoComponent";
import { Typography } from "@material-ui/core";

function CardsContactComponent({ infoturData }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const handleClick = () => {
    navigate("/contacts/details", { state: infoturData });
  };
  return (
    <Paper elevation={8} className={classes.wrapper}>
      <div className={classes.wrapper}>
        <Box onClick={handleClick} className={classes.container}>
          {/* <img src={infotourImage} alt="infotur.jpg" className={classes.infotourImage} /> */}
          <Typography variant="h3">Ver mas</Typography>
        </Box>
        <MapInfo />
      </div>
    </Paper>
  );
}

export default CardsContactComponent;
