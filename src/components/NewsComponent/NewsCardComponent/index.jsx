import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useStyles } from "./NewsCard.styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NewsCardComponent({ data }) {
  const { t, i18n } = useTranslation();

  const correctedUrl = data.promotional_image_url.replace(/\\/g, "/");
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/news/details", { state: data });
  };
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={handleNavigate}>
      <Box className={classes.mediaBox}>
        <CardMedia
          component="img"
          className={classes.image}
          image={correctedUrl}
          alt="News Image"
        />
      </Box>
      <Box className={classes.contentBox}>
        <CardContent className={classes.containerText}>
          <Box className={classes.titleText}>
            <Typography variant="h5">
              {i18n.language === "en" ? data.title_en : data.title}
            </Typography>
          </Box>
          <Box className={classes.descriptionText}>
            <Typography>
              {i18n.language === "en" ? data.description_en : data.description}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default NewsCardComponent;
