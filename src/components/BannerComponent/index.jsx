import React, { useContext, useState } from "react";
import { useStyles } from "./bannerComponent.styles.js";
import { Typography } from "@material-ui/core";
import { Slide, Zoom } from "@mui/material";
import unesco from "../../assets/icons/unesco.jpg";
import potosy from "../../assets/icons/potosy.jpg";
import BannerCarouselComponent from "./BannerCarouselComponent/index.jsx";

function BannerComponent({ children }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const classes = useStyles();
  return (
    <div className={classes.containerStyle}>
      <div className={classes.shadow}>
        <div>
          <Zoom direction="right" in={true} timeout={500}>
            <img src={unesco} alt="UNESCO" className={classes.logoUnesco} />
          </Zoom>
          <Zoom direction="right" in={true} timeout={500}>
            <img src={potosy} alt="UNESCO" className={classes.logoUnesco} />
          </Zoom>
        </div>
        <Slide direction="right" in={true} timeout={500}>
          <Typography variant="h4" className={classes.title}>
            ¡Bienvenido! - Potosi Patrimonio Cultural De La Humanidad
          </Typography>
        </Slide>
        <Slide direction="right" in={true} timeout={500}>
          <Typography variant="h5" className={classes.title}>
            Potosy más que Historia - Descubre los Tesoros Turísticos de Potosí,
            Bolivia
          </Typography>
        </Slide>
      </div>
      <div className={classes.carouselContainer}>
        <BannerCarouselComponent />
      </div>
    </div>
  );
}

export default BannerComponent;
