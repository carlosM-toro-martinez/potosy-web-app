import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, useScrollTrigger } from "@mui/material";
import { useStyles } from "./footer.styles";
import CarouselImagesDetailsComponent from "../Details/CarouselImagesDetailsComponent";
import logosRandomService from '../../async/services/logosRandomService';
import { useQuery } from "react-query";
import potosy from '../../assets/icons/potosy.jpg';
import infotur from '../../assets/icons/infotur.jpg';
import { Link } from "react-router-dom";

export default function Footer() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
  });
  const { data, isLoading, error }
    =
    useQuery(`imagesRandom`, () => logosRandomService());

  return (
    <div className={classes.title}>
      <Typography variant="h5" >
        Cada dia somos más
      </Typography>
      {!isLoading && !error ? <CarouselImagesDetailsComponent images={data} random={true} /> : <Typography>Cargando...</Typography>}
      <Box className={classes.containerImage}>
        <Box>
          <img src={potosy} alt="potosy" className={classes.image} />
        </Box>
        <Box className={classes.containerLinks}>
          <Typography variant="h5">
            Enlances de interés
          </Typography>
          <Link to="/contacts" className={classes.link}>
            Contáctanos
          </Link>
        </Box>
        <Box>
          <img src={infotur} alt="infotur" className={classes.image} />
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Typography variant="h6" align="center" sx={{ color: 'black', fontWeight: 'bold' }}>
          {"Copyright © "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>

    </div>
  );
}