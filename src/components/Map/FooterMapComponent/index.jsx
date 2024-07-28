import React from "react";
import { Link, Typography, Box } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useStyles } from "./FooterMap.styles";
import travel from "../../../assets/icons/travel.svg";
import RouteIcon from "@mui/icons-material/Route";
import HikingIcon from "@mui/icons-material/Hiking";
import { useTranslation } from "react-i18next";

function FooterMapComponent({ calle, coordinates, logo_url, name }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const playStoreLink =
    "https://play.google.com/store/apps/details?id=com.encuentra.potosi";

  return (
    <div className={classes.card}>
      <h2>{name}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <HikingIcon sx={{ fontSize: "6rem", color: "black" }} />

        <RouteIcon sx={{ fontSize: "6rem", color: "red" }} />

        <img src={logo_url} alt="Logo" className={classes.logo} />
      </div>

      <div className={classes.content}>
        <div className={classes.address}>
          <Typography variant="h6" className={classes.heading}>
            {t("address")}: {calle}
          </Typography>
          {/* <Typography className={classes.coordinates}>
            Coordenadas: {coordinates}
          </Typography> */}
        </div>
      </div>
      <div className={classes.downloadText}>
        <Typography variant="body1" sx={{ textAlign: "center", width: "100%" }}>
          {t("downloadApp")}
        </Typography>
        <PhoneIphoneIcon sx={{ fontSize: "6rem" }} className={classes.icon} />
        <Link
          href={playStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
          sx={{ color: "red", textDecorationColor: "red" }}
        >
          Encuentra Potosi
        </Link>
      </div>
    </div>
  );
}

export default FooterMapComponent;
