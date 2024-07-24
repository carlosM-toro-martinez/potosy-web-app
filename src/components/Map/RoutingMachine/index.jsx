import { useContext } from "react";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { MapContext } from "../../../context/MapContext";
import iconStart from "../../../assets/images/walkMan.png";
import HikingIcon from "@mui/icons-material/Hiking";

import iconEnd from "../../../assets/images/house.png";

const CreateRoutineMachineLayer = ({ coordinates }) => {
  const { positionStart } = useContext(MapContext);

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(positionStart[0], positionStart[1]),
      L.latLng(coordinates.x, coordinates.y),
    ],
    createMarker: (i, start, n) => {
      const markerOptions = {
        icon: L.icon({
          iconUrl: i === 0 ? iconStart : iconEnd,
          iconSize: [42, 42],
          iconAnchor: [32, 32],
          popupAnchor: [0, -32],
        }),
      };
      return L.marker(start.latLng, markerOptions);
    },
    lineOptions: {
      styles: [
        {
          color: "#FF4500",
          opacity: 0.6,
          weight: 4,
        },
      ],
    },
    itineraryFormatter: {
      createItineraryContainer: () => {
        const container = document.createElement("div");
        container.style.display = "none";
        return container;
      },
    },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    routeWhileDragging: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;
