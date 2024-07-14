import { useStyles } from "./carouselImages.styles";
import { Typography } from "@material-ui/core";
import { useQuery } from "react-query";
import sectionsService from "../../../async/services/sectionsService";
import SwiperCarousel from "./SwiperCarouselComponent";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CarouselImagesComponent = ({ listCardRef }) => {
  const { id } = useParams();
  const idParam = id;
  const { data, isLoading, isError, error } = useQuery(`sections`, () =>
    sectionsService()
  );
  useEffect(() => {
    if (idParam) {
      listCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [idParam]);
  const classes = useStyles();
  return (
    <>
      {!isLoading && !error ? (
        <div className={classes.container}>
          <Paper
            style={{ marginTop: idParam ? ".6rem" : "0rem" }}
            className={classes.container}
            elevation={5}
          >
            <Typography variant="h3">Apartados</Typography>
            <SwiperCarousel slidesData={data} listCardRef={listCardRef} />
          </Paper>
        </div>
      ) : (
        <Typography variant="h3" style={{ marginTop: "2rem" }}>
          Cargando...
        </Typography>
      )}
    </>
  );
};

export default CarouselImagesComponent;
