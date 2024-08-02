import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconEnd from "../../assets/images/destino.png";

const PotosiMap = ({ data }) => {
  // const potosiCoordinates = [
  //   {
  //     id: 1,
  //     position: [-19.5888968420165, -65.7548005653399],
  //     name: "Torre de la Compañia de Jesús, Calle Ayacucho entre Oruro y Bustillos",
  //   },
  //   {
  //     id: 2,
  //     position: [-19.557490532432098, -65.76138607945668],
  //     name: "Nueva Terminal, Av las Banderas",
  //   },
  //   {
  //     id: 3,
  //     position: [-19.589386885261078, -65.7525811721162],
  //     name: "Boulevard, Pasaje Boulevard(calle Padilla) entre Hoyos y Linares",
  //   },
  // ];

  const customMarkerIcon = new L.Icon({
    iconUrl: iconEnd,
    iconSize: [30, 30],
    iconAnchor: [32, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={[-19.575250441347954, -65.76169263531871]}
      zoom={12}
      style={{ height: "400px", width: "500px" }}
    >
      <TileLayer
        attribution="CMTM"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {data.map(({ index, coordinates, address, business_name, logo_url }) => (
        <Marker
          key={index}
          position={[coordinates.x, coordinates.y]}
          icon={customMarkerIcon}
        >
          <Popup>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ textAlign: "center" }}>{business_name}</h3>
              <img src={logo_url} width={"120px"} />
              <p>{address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PotosiMap;
