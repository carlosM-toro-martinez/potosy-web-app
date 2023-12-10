import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconEnd from '../../assets/images/house.png';

const PotosiMap = () => {
    const potosiCoordinates = [
        { id: 1, position: [-19.5833, -65.7500], name: 'Location 1' },
        { id: 2, position: [-19.5850, -65.7595], name: 'Location 2' },
        { id: 3, position: [-19.5900, -65.7535], name: 'Location 3' },
        { id: 4, position: [-19.5800, -65.7450], name: 'Location 4' },
        { id: 5, position: [-19.5700, -65.7600], name: 'Location 5' },
    ];

    const customMarkerIcon = new L.Icon({
        iconUrl: iconEnd,
        iconSize: [42, 42],
        iconAnchor: [32, 32],
        popupAnchor: [0, -32],
    });

    return (
        <MapContainer
            center={[-19.5833, -65.7500]}
            zoom={14}
            style={{ height: '300px', width: '350px' }}
        >
            <TileLayer
                attribution='CMTM'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {potosiCoordinates.map(({ id, position, name }) => (
                <Marker position={position} icon={customMarkerIcon}>
                    <Popup>{name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default PotosiMap;
