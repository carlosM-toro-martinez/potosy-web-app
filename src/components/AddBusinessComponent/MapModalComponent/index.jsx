import React, { useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Modal, Button } from '@mui/material';
import iconEnd from '../../../assets/images/house.png';


const MapModal = ({ isOpen, onClose, onAccept }) => {
    const [position, setPosition] = useState([-19.58884782298813, -65.75479711286093]);
    const markerRef = useRef(null);

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition([marker?.getLatLng()?.lat, marker?.getLatLng()?.lng])
                }
            },
        }),
        [],
    )

    const handleAccept = () => {
        onAccept(position);
        onClose();
    };

    const customMarkerIcon = new L.Icon({
        iconUrl: iconEnd,
        iconSize: [28, 28],
        iconAnchor: [32, 32],
        popupAnchor: [0, -32],
    });

    return (
        <Modal open={isOpen} onClose={onClose}>
            <div>
                <MapContainer
                    center={[-19.58884782298813, -65.75479711286093]}
                    zoom={14}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        attribution='CMTM'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={position}
                        draggable={true}
                        eventHandlers={eventHandlers}
                        ref={markerRef}
                        icon={customMarkerIcon}
                    >
                        <Popup>Mueve el marcador</Popup>
                    </Marker>
                </MapContainer>
                <Button onClick={handleAccept} variant="contained" color="primary">
                    Aceptar
                </Button>
            </div>
        </Modal>
    );
};

export default MapModal;
