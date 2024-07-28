import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import { useStyles } from "./NewsComponent.styles";
import NewsCardComponent from "./NewsCardComponent";
import newsService from "../../async/services/newsService";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

function NewsComponent() {
  const { t } = useTranslation();
  const { data, isLoading, refetch, error } = useQuery(`newsAdmin`, () =>
    newsService()
  );
  const classes = useStyles();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Box className={classes.Container}>
      <Typography variant="h2" component="h2">
        {t("newsTitle")}
      </Typography>
      <Box className={classes.containerDesktop}>
        <ImageList cols={2} gap={50}>
          {!isLoading && !error
            ? data.map((item) => (
                <Slide direction="right" in={isVisible} timeout={500}>
                  <div>
                    <NewsCardComponent data={item} />
                  </div>
                </Slide>
              ))
            : null}
        </ImageList>
      </Box>
      <Box className={classes.containerMovile}>
        <ImageList cols={1} gap={25}>
          {!isLoading && !error
            ? data.map((item) => (
                <Slide direction="right" in={isVisible} timeout={500}>
                  <div>
                    <NewsCardComponent data={item} />
                  </div>
                </Slide>
              ))
            : null}
        </ImageList>
      </Box>
    </Box>
  );
}

export default NewsComponent;
