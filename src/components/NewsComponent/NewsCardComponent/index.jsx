import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useStyles } from "./NewsCard.styles";
import { useNavigate } from "react-router-dom";

function NewsCardComponent({ data }) {
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
            <Typography variant="h5">{data.title}</Typography>
          </Box>
          <Box className={classes.descriptionText}>
            <Typography>{data.description}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default NewsCardComponent;
