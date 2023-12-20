import { useStyles } from './carouselImages.styles';
import { Typography } from '@material-ui/core';
import { useQuery } from 'react-query';
import sectionsService from '../../../async/services/sectionsService';
import SwiperCarousel from './SwiperCarouselComponent';
import { Paper } from '@mui/material';


const CarouselImagesComponent = ({ listCardRef }) => {


  const { data, isLoading, isError, error } = useQuery(`sections`, () => sectionsService());

  const classes = useStyles();
  return (
    <>
      {!isLoading && !error ?
        <div className={classes.container}>
          <Paper className={classes.container} elevation={5}>
            <Typography variant='h3' >
              Secciones
            </Typography>
            <SwiperCarousel slidesData={data} listCardRef={listCardRef} />
          </Paper>
        </div>
        : <Typography variant='h3' style={{ marginTop: '2rem' }}>Cargando...</Typography >}

    </>
  );
};

export default CarouselImagesComponent;