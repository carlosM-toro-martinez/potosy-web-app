import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useStyles } from "./MapInfo.styles";
import PotosiMap from "../../PotosiMap";

export default function MapInfo() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.mapContainer}>
        <Typography variant="h2" component="h2">
          Centros Infotur
        </Typography>
        <PotosiMap />
      </Box>
    </Box>
  );
}