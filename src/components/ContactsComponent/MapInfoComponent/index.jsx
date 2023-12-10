import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useStyles } from "./MapInfo.styles";
import footerBackground from '../../../assets/images/5potosi.jpg';
import PotosiMap from "../../PotosiMap";

export default function MapInfo() {
  const classes = useStyles();
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${footerBackground})`,
        }}
        className={classes.wrapper}
      >
        <Box className={classes.mapContainer}>
          <Typography variant="h2" component="h2">
            Ubicaciones Centros Infotour
          </Typography>
          <PotosiMap />
        </Box>
      </Box>
    </Box>
  );
}