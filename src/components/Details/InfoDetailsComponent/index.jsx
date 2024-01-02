import React from 'react';
import { Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useStyles } from './newsDetails.styles';
import { useLocation } from 'react-router-dom';


const NewsDetailsComponent = () => {
    const novelty = useLocation().state;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h5" gutterBottom>
                {novelty.title || 'Título no disponible'}
            </Typography>
            <div>
                <img src={novelty.promotional_image_url} alt="Logo de Infotur" width="100%" height="100%" />
            </div>
            <Typography variant="h6">
                {novelty.description || 'Descripción no disponible'}
            </Typography>
            {novelty.date && (
                <Typography variant="h6" className={classes.icon}>
                    <EventIcon /> {new Date(novelty.date).toLocaleDateString()}
                </Typography>
            )}
            {novelty.time && (
                <Typography variant="h6" className={classes.icon}>
                    <AccessTimeIcon /> {novelty.time}
                </Typography>
            )}
            {novelty.address && (
                <Typography variant="h6" className={classes.icon}>
                    <LocationOnIcon /> {novelty.address}
                </Typography>
            )}
        </div>
    );
};

export default NewsDetailsComponent;