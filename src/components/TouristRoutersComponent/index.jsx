import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import RouteIcon from "@mui/icons-material/Route";
import routesData from "../../JSON/routesTourist.json";
import { useStyles } from "./touristRouters";
import { Typography } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
const RouteMap = ({ route }) => {
  const map = useMap();
  map.flyTo(route.points[0], 16);
  return null;
};

function TouristRouterComponent() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [destination, setDestination] = useState(routesData.routes[0].destinos);
  const [title, setTitle] = useState(routesData.routes[0].title);
  const [currentRoute, setCurrentRoute] = useState(routesData.routes[0]);
  const handleRouteChange = (index, destinations, title) => {
    setTitle(title);
    setDestination();
    setCurrentRoute(routesData.routes[index]);
    setDestination(destinations);
  };

  return (
    <Box>
      <Typography className={classes.title}>
        {t("touristRoute")} Potosi
      </Typography>
      <Box className={classes.container}>
        <div className={classes.seccionRoutes}>
          <h2>
            {t("selectCircuit")}: <RouteIcon />
          </h2>
          {routesData.routes.map((route, index) => (
            <Button
              variant="outlined"
              active
              key={index}
              onClick={() =>
                handleRouteChange(index, route.destinos, route.title)
              }
            >
              {route.title}
            </Button>
          ))}
        </div>
        <TableContainer
          component={Paper}
          elevation={8}
          sx={{ width: 300, marginTop: "3rem" }}
        >
          <Table sx={{ width: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{title}</TableCell>
              </TableRow>
            </TableHead>
            {destination
              ? destination.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th">{row}</TableCell>
                  </TableRow>
                ))
              : null}
          </Table>
        </TableContainer>
        <MapContainer
          center={[-19.589149842372603, -65.75348271868943]}
          zoom={18}
          className={classes.map}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; CMTM"
          />
          <RouteMap route={currentRoute} />
          <Polyline positions={currentRoute.points} color={currentRoute.color}>
            <Popup>
              <div>
                <h3>{currentRoute.title}</h3>
                <p>Destinos: {currentRoute.destinos.join(", ")}</p>
              </div>
            </Popup>
          </Polyline>
        </MapContainer>
      </Box>
    </Box>
  );
}

export default TouristRouterComponent;
