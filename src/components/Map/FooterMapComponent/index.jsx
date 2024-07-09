import { Link } from "@mui/material";
import React from "react";

function FooterMapComponent({ calle, coordinates, logo_url }) {
  const playStoreLink =
    "https://play.google.com/store/apps/details?id=com.potosy";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        src={logo_url}
        alt="Logo"
        style={{
          width: "150px",
          marginBottom: "10px",
          marginTop: "3rem",
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <div>Dirección:</div>
        <div>{calle}</div>
        <div>
          Para una mejor experiencia descargue nuestra app de la playstore
          <Link
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "5px" }}
          >
            Potosy más que historia
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterMapComponent;
