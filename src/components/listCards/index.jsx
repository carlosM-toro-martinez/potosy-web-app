import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { useStyles } from './listCards.styles';
import fontEncuentra from '../../assets/images/fondo.jpg';
import CardItem from './cardItem';
import ImageList from '@mui/material/ImageList';
import { useQuery } from 'react-query';
import businessOneService from '../../async/services/businessOneService';
import { SectionContext } from '../../context/SectionContext';
import { ImageListItem, Typography } from '@material-ui/core';
import background from '../../assets/images/background.jpg';
import CarrouselImages from './carouselImages'

function ListCard({ listCardRef }) {
  const classes = useStyles({ image: fontEncuentra });
  const { section, route, descSection } = useContext(SectionContext);
  const { data, isLoading, isError, error } = useQuery(`section${section}`, () => businessOneService(section));
  return (
    <>
      {/* <CarrouselImages listCardRef={listCardRef} /> */}
      <div>
        {/* {route ? <Grid style={{ backgroundImage: `url(${background})` }} ref={listCardRef}> */}
        {/* <Grid style={{ backgroundImage: `url(${background})` }}> */}
        <Grid style={{ backgroundColor: '#D9D9D9' }}>
          <CarrouselImages listCardRef={listCardRef} />
          <Grid className={classes.boxShadow}>
            <Grid className={classes.descriptionSection}>
              <Typography variant="h5" ref={listCardRef} >{route}</Typography>
              <Typography variant="h4">
                {descSection}
              </Typography>
            </Grid>
            <div className={classes.containerDesktop} >
              <ImageList sx={{ margin: 3 }} cols={3} gap={50}>
                {isLoading && error ? <h1>Cargando...</h1> : data?.map(item => (
                  <div key={item.business_id}>
                    <ImageListItem sx={{ width: '18rem' }}>
                      <CardItem data={item} />
                    </ImageListItem>
                  </div>

                ))}

              </ImageList>
            </div>
            <div className={classes.containerMovil} >
              <ImageList sx={{ justifyContent: 'center', textAlign: 'center' }} cols={2} gap={25}>
                {isLoading && error ? <h1>Cargando...</h1> : data?.map(item => (
                  <div key={item.business_id}>
                    <ImageListItem sx={{ width: '18rem' }}>
                      <CardItem data={item} />
                    </ImageListItem>
                  </div>

                ))}

              </ImageList>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ListCard;