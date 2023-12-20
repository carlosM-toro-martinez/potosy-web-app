import React, { useContext, useState } from 'react'
import { useStyles } from './bannerComponent.styles.js';
import imageBackground from '../../assets/images/5potosi.jpg'
import { Typography } from '@material-ui/core';
import { Slide } from '@mui/material';
import potosy from '../../assets/icons/potosy.jpg';
import unesco from '../../assets/icons/unesco.jpg';


function BannerComponent({ children }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const classes = useStyles();
  return (
    <div
      style={{ backgroundImage: `url(${imageBackground})` }}
      className={classes.containerStyle}
    >
      <img
        src={imageBackground}
        alt="Background"
        className={classes.backgroundImage}
        onLoad={handleImageLoad}
        style={{ display: 'none' }}
      />
      {imageLoaded ? <div className={classes.shadow}>
        <Slide direction="right" in={true} timeout={500}>
          <Typography variant='h4' className={classes.title} >
            ¡Bienvenido! - Potosi Patrimonio Cultural De La Humanidad
          </Typography>
        </Slide>
        <Typography variant="h4" className={classes.title}>
          Ahora En La Red
        </Typography>
        <Slide direction="up" in={true} timeout={1500}>
          <div className={classes.logosContainer}>
            <img src={potosy} alt="Potosy" className={classes.logoPotosy} />
            <img src={unesco} alt="UNESCO" className={classes.logoUnesco} />
          </div>
        </Slide>
      </div> : null}
    </div>
  )
}

export default BannerComponent