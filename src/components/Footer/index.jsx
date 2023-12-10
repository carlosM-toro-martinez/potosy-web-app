import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useStyles } from "./footer.styles";
import footerBackground from '../../assets/images/1potosi.jpg';
import CarouselImagesDetailsComponent from "../Details/CarouselImagesDetailsComponent";
import imagesRandomService from '../../async/services/imagesRandomService';
import { useQuery } from "react-query";

export default function Footer() {
  const classes = useStyles();
  const { data, isLoading, isError, error, refetch }
    =
    useQuery(`imagesRandom`, () => imagesRandomService());

  return (
    <Box sx={{
      backgroundImage: `url(${footerBackground})`,
    }}
      className={classes.container}
    >
      <Box
        className={classes.wrapper}
      >
        <Box className={classes.mapContainer}>
          <Typography variant="h2" component="h2">
            Imagenes
          </Typography>
          {!isLoading && !error ? <CarouselImagesDetailsComponent images={data} /> : null}
        </Box>
        <Box className={classes.textContainer}>
          <Link href="https://www.facebook.com/" color="inherit">
            <Facebook sx={{ fontSize: '42px', color: '#1877f2' }} />
          </Link>
          <Link href="https://www.instagram.com/" color="inherit">
            <Instagram sx={{ fontSize: '42px', color: '#fd7e14' }} />
          </Link>
          <Link href="https://www.twitter.com/">
            <Twitter sx={{ fontSize: '42px', color: '#1da1f2' }} />
          </Link>
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Typography variant="h6" align="center" sx={{ color: 'black', fontWeight: 'bold' }}>
          {"Copyright © "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
}