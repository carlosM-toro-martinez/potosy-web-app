import React, { useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import RoutingMachine from "./RoutingMachine";
import { MapContext } from "../../context/MapContext";
import mapPoint from "../../assets/images/mapPoint.png";
import { useStyles } from "./map.styles";
import { useMapEvents } from "react-leaflet";
import { useLocation } from "react-router-dom";
import FooterMapComponent from "./FooterMapComponent";
import iconEnd from "../../assets/images/house.png";

function Map() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const { positionStart, setPositionStart, location } = useContext(MapContext);
  const positionEnd = [51.51, -0.1];
  const { address, coordinates, logo_url } = useLocation().state;
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
        });
      } else {
        console.error("La geolocalización no está soportada por tu navegador.");
      }
    };
    const getLocationStart = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setPositionStart([latitude, longitude]);
        });
      } else {
        console.error("La geolocalización no está soportada por tu navegador.");
      }
    };

    getLocation();
    getLocationStart();

    const interval = setInterval(getLocation, 10000);
    return () => clearInterval(interval);
  }, []);

  const AdjustMap = () => {
    const map = useMap();
    if (currentLocation) {
      map.setView(currentLocation, map.getZoom());
    }
    return null;
  };

  const customMarkerIconPoint = new L.Icon({
    iconUrl: mapPoint,
    iconSize: [42, 42],
    iconAnchor: [32, 32],
    popupAnchor: [0, -32],
  });

  const customMarkerIcon = new L.Icon({
    iconUrl: iconEnd,
    iconSize: [42, 42],
    iconAnchor: [32, 32],
    popupAnchor: [0, -32],
  });

  const MyMapComponent = () => {
    const map = useMapEvents({
      locationfound(e) {
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return null;
  };
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <MapContainer
          center={
            currentLocation ? currentLocation : [coordinates.x, coordinates.y]
          }
          zoom={15}
          scrollWheelZoom={false}
          className={classes.map}
        >
          <TileLayer
            attribution="CMTM"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {currentLocation ? (
            <>
              {/* <Marker position={currentLocation} icon={customMarkerIconPoint}>
                <Popup>Tu ubicación actual</Popup>
              </Marker> */}
              <AdjustMap />
              <RoutingMachine coordinates={coordinates} />
            </>
          ) : (
            <Marker
              position={[coordinates.x, coordinates.y]}
              icon={customMarkerIcon}
            >
              <Popup>Ubicacion Del Establecimiento</Popup>
            </Marker>
          )}
          <MyMapComponent />
        </MapContainer>
      </div>
      <div className={classes.footerContainer}>
        <FooterMapComponent
          calle={address}
          coordinates={coordinates}
          logo_url={logo_url}
        />
      </div>
    </div>
  );
}

export default Map;
