import React from "react";
import {
  FacebookRounded,
  WhatsApp,
  Instagram,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import { useStyles } from "./SocialNetworks.styles";

export default function SocialNetworksComponent({
  face,
  inst,
  wpp,
  tube,
  twit,
}) {
  const classes = useStyles();

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={classes.iconContainer}>
      {face ? (
        <div
          className={`${classes.iconButton} ${classes.facebook}`}
          onClick={() => handleRedirect(face)}
        >
          <FacebookRounded className={`${classes.icon} ${classes.facebook}`} />
        </div>
      ) : null}
      {wpp ? (
        <div
          className={`${classes.iconButton} ${classes.whatsapp}`}
          onClick={() => handleRedirect(wpp)}
        >
          <WhatsApp className={`${classes.icon} ${classes.whatsapp}`} />
        </div>
      ) : null}
      {inst ? (
        <div
          className={`${classes.iconButton} ${classes.instagram}`}
          onClick={() => handleRedirect(inst)}
        >
          <Instagram className={`${classes.icon} ${classes.instagram}`} />
        </div>
      ) : null}
      {tube ? (
        <div
          className={`${classes.iconButton} ${classes.youtube}`}
          onClick={() => handleRedirect(tube)}
        >
          <YouTube className={`${classes.icon} ${classes.youtube}`} />
        </div>
      ) : null}
      {twit ? (
        <div
          className={`${classes.iconButton} ${classes.X}`}
          onClick={() => handleRedirect(twit)}
        >
          <Twitter className={`${classes.icon} ${classes.X}`} />
        </div>
      ) : null}
    </div>
  );
}
