import React from "react";
import { Typography, Box, Paper, IconButton } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useStyles } from "./newsDetails.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsDetailsComponent = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const novelty = useLocation().state;
  const classes = useStyles();

  const handleGoBack = () => {
    navigate("/news");
  };

  return (
    <>
      <Paper elevation={10}>
        <Box className={classes.box}>
          <div className={classes.container}>
            <IconButton onClick={handleGoBack} className={classes.backButton}>
              <ArrowBackIcon style={{ marginRight: ".5rem", color: "#000" }} />
              <Typography variant="h6" className={classes.icon}>
                {t("return")}
              </Typography>
            </IconButton>
            <Typography variant="h5" gutterBottom>
              {i18n.language === "en"
                ? novelty.title_en
                : novelty.title || "Título no disponible"}
            </Typography>
            <div>
              <img
                src={novelty.promotional_image_url}
                alt="Logo de Infotur"
                width="100%"
                height="100%"
              />
            </div>
            <Typography variant="h6">
              {i18n.language === "en"
                ? novelty.description_en
                : novelty.description || "Descripción no disponible"}
            </Typography>
            {novelty.date && (
              <Typography variant="h6" className={classes.icon}>
                <EventIcon /> {new Date(novelty.date).toLocaleDateString()}
              </Typography>
            )}
            {novelty.time && (
              <Typography variant="h6" className={classes.icon}>
                <AccessTimeIcon /> {novelty.time}
              </Typography>
            )}
            {novelty.address && (
              <Typography variant="h6" className={classes.icon}>
                <LocationOnIcon /> {novelty.address}
              </Typography>
            )}
          </div>
        </Box>
      </Paper>
    </>
  );
};

export default NewsDetailsComponent;
