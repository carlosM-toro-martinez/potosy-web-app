import { useContext } from 'react'
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";
import { MapContext } from '../../../context/MapContext';
import iconStart from '../../../assets/images/walkMan.png';
import iconEnd from '../../../assets/images/house.png';

const CreateRoutineMachineLayer = ({ coordinates }) => {
    //const { positionMuseo, position, latlong } = React.useContext(AppContext)
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
                    color: "rgba(51, 51, 51)",
                    opacity: 1,
                    weight: 5
                }
            ]
        },
        ItineraryOptions: {
            show: true,
            timeTemplate: 'hola',
            containerClassName: 'containerI'
        },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false,
        show: true,
        timeTemplate: 'hola',
        containerClassName: 'containerI'

    })
    return instance;
};
const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;