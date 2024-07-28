import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useStyles } from "./listCards.styles";
import CardItem from "./cardItem";
import ImageList from "@mui/material/ImageList";
import { useQuery } from "react-query";
import businessOneService from "../../async/services/businessOneService";
import { SectionContext } from "../../context/SectionContext";
import { ImageListItem, Typography } from "@material-ui/core";
import CarrouselImages from "./carouselImages";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ListCard({ listCardRef }) {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const idParam = id;
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const { section, route, setRoute, descSection, setSection, setDescSection } =
    useContext(SectionContext);
  const { data, isLoading, error } = useQuery(
    [`section${section}`, section],
    () => businessOneService(id)
  );

  useEffect(() => {
    if (!isLoading && !error) {
      setRoute(
        i18n.language === "en"
          ? data[0]?.section_title_en
          : data[0]?.section_title
      );
      setSection(data[0]?.section_id);
      setDescSection(
        i18n.language === "en"
          ? data[0]?.section_description_en
          : data[0]?.section_description
      );
      const filtered = data.filter((item) => item.state === true);
      setItems(filtered);
    }
  }, [data, isLoading]);

  return (
    <>
      <Grid>
        <CarrouselImages listCardRef={listCardRef} />
        <Grid className={classes.boxShadow} ref={listCardRef}>
          {route && idParam ? (
            <Box className={classes.descriptionSection}>
              <Typography component="h5">{route}</Typography>
              <Typography variant="body" className={classes.description}>
                {descSection}
              </Typography>
            </Box>
          ) : null}
          {route && idParam ? (
            <div className={classes.containerDesktop}>
              <ImageList cols={3} gap={50}>
                {isLoading && error ? (
                  <h1>Cargando...</h1>
                ) : (
                  items?.map((item) => (
                    <div key={item.business_id}>
                      <ImageListItem sx={{ width: "18rem" }}>
                        <CardItem
                          data={item}
                          route={route}
                          idSection={idParam}
                        />
                      </ImageListItem>
                    </div>
                  ))
                )}
              </ImageList>
            </div>
          ) : null}
          {route && idParam ? (
            <div className={classes.containerMovil}>
              <ImageList
                sx={{ justifyContent: "center", textAlign: "center" }}
                cols={2}
                gap={25}
              >
                {isLoading && error ? (
                  <h1>Cargando...</h1>
                ) : (
                  items?.map((item) => (
                    <div key={item.business_id}>
                      <ImageListItem sx={{ width: "18rem" }}>
                        <CardItem
                          data={item}
                          route={route}
                          idSection={idParam}
                        />
                      </ImageListItem>
                    </div>
                  ))
                )}
              </ImageList>
            </div>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
}

export default ListCard;
