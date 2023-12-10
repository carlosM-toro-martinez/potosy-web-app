import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStyles } from './CarouselImgDetails.styles';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function CarouselImagesDetailsComponent({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const goToNextSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <IconButton onClick={goToPrevSlide}>
        <ArrowCircleLeftIcon
          fontSize="inherit"
          style={{ fontSize: '5rem' }}
          className={`${classes.icons} ${classes.prevIcons}`}
        />
      </IconButton>
      {isLoading && <div className={classes.loadingText}>Cargando...</div>}
      <div className={classes.imageContainer}>
        <img
          src={images[currentIndex]?.image_url}
          alt={`Slide ${currentIndex + 1}`}
          className={classes.img}
          onLoad={handleImageLoad}
        />
      </div>
      <IconButton onClick={goToNextSlide}>
        <ArrowCircleRightIcon
          fontSize="inherit"
          style={{ fontSize: '5rem' }}
          className={`${classes.icons} ${classes.nextIcons}`}
        />
      </IconButton>
    </div>
  );
}

export default CarouselImagesDetailsComponent;