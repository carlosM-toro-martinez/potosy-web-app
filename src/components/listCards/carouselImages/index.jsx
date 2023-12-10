import { useContext, useState } from 'react';
import { useStyles } from './carouselImages.styles';
import { Grid, Slide, Typography } from '@material-ui/core';
import { SectionContext } from '../../../context/SectionContext';
import { useQuery } from 'react-query';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import sectionsService from '../../../async/services/sectionsService';
import SliderComponent from './sliderComponent';


const CarouselImagesComponent = ({ listCardRef }) => {
  const { setRoute, route, setSection, setDescSection } = useContext(SectionContext);
  const [startIndex, setStartIndex] = useState(0);


  const { data, isLoading, isError, error } = useQuery(`sections`, () => sectionsService());
  const updateData = (title, id, desc) => {
    listCardRef.current.scrollIntoView({ behavior: 'smooth' });
    setRoute(title);
    setSection(id);
    setDescSection(desc);
  };


  const goToNextSlide = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex <= data?.length - 3 ? newIndex : data?.length - 3;
    });
  };

  const goToPrevSlide = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : 0;
    });
  };

  const sections = !isLoading && !error ? data?.slice(startIndex, startIndex + 3) : null;

  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Typography variant='h3' >
          Secciones
        </Typography>
        {/* <SliderComponent /> */}

      </div>
      {/* < div className={classes.wrapper}>
        <div className={classes.containerDesktop} >
          <IconButton onClick={goToPrevSlide} disabled={startIndex === 0}>
            <ArrowBackIosIcon
              fontSize="inherit"
              style={{ color: startIndex === 0 ? 'gray' : 'white', fontSize: '4rem' }} />
          </IconButton>
          {!isLoading && !error ? sections?.map((item, index) => (
            <Slide
              key={index}
              direction={index === 0 ? 'right' : index === 2 ? 'left' : 'up'}
              in={true}
              timeout={1000}
              mountOnEnter
              unmountOnExit
            >
              <div
                key={item.key}
                onClick={() => updateData(item.title, item.section_id, item.description)}
                className={classes.itemContainer}>
                <div className={classes.item}
                  style={{
                    backgroundColor:
                      item.title === route ?
                        '#556B2F' :
                        '#C0C0C0'
                  }}
                >
                  <img
                    src={item.image_url}
                    alt={`Slide ${startIndex + index + 1}`}
                    className={classes.image}
                  />
                </div>
                <Typography className={classes.titleSecctions} >{item.title}</Typography>
              </div>
            </Slide>
          )) :
            <>
              <Grid>
                <Grid className={classes.item}
                  style={{
                    backgroundColor: '#C0C0C0'
                  }}>
                </Grid>
              </Grid>
              <Grid>
                <Grid className={classes.item}
                  style={{
                    backgroundColor: '#C0C0C0'
                  }}>
                </Grid>
              </Grid>
              <Grid>
                <Grid className={classes.item}
                  style={{
                    backgroundColor: '#C0C0C0'
                  }}>
                </Grid>
              </Grid>
            </>
          }
          <IconButton onClick={goToNextSlide} disabled={startIndex === data?.length - 3}>
            <ArrowForwardIosIcon
              fontSize="inherit"
              style={{ color: startIndex === data?.length - 3 ? 'gray' : 'white', fontSize: '4rem' }} />
          </IconButton>
        </div>


        <div className={classes.containerMovil} >
          {!isLoading && !error ? data.map((item, index) => (
            <Slide
              key={index}
              direction={index === 0 ? 'right' : index === 2 ? 'left' : 'up'}
              in={true}
              timeout={1000}
              mountOnEnter
              unmountOnExit
            >
              <div
                key={item.key}
                onClick={() => updateData(item.title, item.section_id, item.description)}
                className={classes.itemContainer}>
                <div className={classes.item}
                  style={{
                    backgroundColor:
                      item.title === route ?
                        '#556B2F' :
                        '#C0C0C0'
                  }}
                >
                  <img
                    src={item.image_url}
                    alt={`Slide ${startIndex + index + 1}`}
                    className={classes.image}
                  />
                </div>
                <Typography className={classes.titleSecctions} >{item.title}</Typography>
              </div>
            </Slide>
          )) : null
          }
        </div>
      </div > */}
      <SliderComponent />

    </>
  );
};

export default CarouselImagesComponent;