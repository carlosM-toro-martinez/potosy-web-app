import React, { useContext } from 'react'
import { useStyles } from './bannerComponent.styles.js';
import imageBackground from '../../assets/images/4potosi.jpg'
import { Typography } from '@material-ui/core';
import { Slide } from '@mui/material';

function BannerComponent({ children }) {

  const classes = useStyles();
  return (
    <div
      style={{ backgroundImage: `url(${imageBackground})` }}
      className={classes.containerStyle}
    >
      <div className={classes.shadow}>
        <Slide direction="right" in={true} timeout={500}>
          <Typography variant='h4' className={classes.title} >
            ¡Bienvenido! - Potosi Patrimonio Cultural De La Humanidad
          </Typography>
        </Slide>
        <Slide direction="left" in={true} timeout={4000}>
          <Typography variant="h4" className={classes.title}>
            Ahora En La Red
          </Typography>
        </Slide>
      </div>
    </div>
  )
}

export default BannerComponent