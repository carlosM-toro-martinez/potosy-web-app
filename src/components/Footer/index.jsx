import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, useScrollTrigger } from "@mui/material";
import { useStyles } from "./footer.styles";
import CarouselFooterComponent from "./CarouselFooterComponent";
import logosRandomService from "../../async/services/logosRandomService";
import { useQuery } from "react-query";
import SocialNetworksComponent from "./SocialNetworksComponent";
import LinksComponent from "./LinksComponent";
import FooterContentComponent from "./FooterContentComponent";

export default function Footer() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
  });
  const { data, isLoading, error } = useQuery(`imagesRandom`, () =>
    logosRandomService()
  );
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className={classes.title} id="footer">
      <FooterContentComponent />
      <Box className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          {"Copyright © "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </div>
  );
}
