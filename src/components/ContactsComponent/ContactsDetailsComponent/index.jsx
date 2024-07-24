import React from "react";
import { Typography, Box, Paper, IconButton } from "@mui/material";
import { useStyles } from "./ContactsDetails.styles";
import { useLocation, useNavigate } from "react-router-dom";
//import infoturLogo from '../../../assets/icons/infotur.jpg';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Facebook, WhatsApp, Telegram } from "@mui/icons-material";

function ContactsDetailsComponent() {
  const navigate = useNavigate();
  const infoturData = useLocation().state;
  const classes = useStyles();
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const handleGoBack = () => {
    navigate("/contacts");
  };
  return (
    <div className={classes.container}>
      <IconButton
        onClick={handleGoBack}
        className={classes.backButton}
        style={{ marginRight: "20rem" }}
      >
        <ArrowBackIcon style={{ marginRight: ".5rem", color: "#D1D1D1" }} />
        <Typography variant="h6" style={{ color: "#C1C1C1" }}>
          Volver
        </Typography>
      </IconButton>
      <div className={classes.title}>Infotur Información</div>
      <div className={classes.logo}>
        {/* <img src={infoturLogo} alt="Logo de Infotur" width="100%" height="100%" /> */}
      </div>
      <div className={classes.infoRow}>
        <div>
          <span className={classes.label}>Números de Infotur:</span>
          <span>{infoturData.telefono}</span>
        </div>
      </div>
      <div>
        <span className={classes.label}>Dirección:</span>
        <span>{infoturData.direccion}</span>
      </div>
      <div className={classes.description}>
        <span className={classes.label}>Descripción Infotur:</span>
        <p>{infoturData.descripcion}</p>
      </div>
      <div className={classes.iconContainer}>
        <Facebook
          onClick={() =>
            handleRedirect("https://www.facebook.com/infoturpotosi/")
          }
          className={classes.icon}
          sx={{ fontSize: "4rem" }}
        />
        <WhatsApp
          onClick={() => handleRedirect("https://wa.me/+5916231021/")}
          className={classes.icon}
          sx={{ fontSize: "4rem" }}
        />
        <Telegram
          onClick={() => handleRedirect("https://t.me/+5916231021/")}
          className={classes.icon}
          sx={{ fontSize: "4rem" }}
        />
      </div>
    </div>
  );
}

export default ContactsDetailsComponent;
