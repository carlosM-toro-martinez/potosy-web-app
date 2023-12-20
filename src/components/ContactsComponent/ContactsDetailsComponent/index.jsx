import React from 'react';
import { useStyles } from "./ContactsDetails.styles";
import { useLocation } from 'react-router-dom';
import infoturLogo from '../../../assets/icons/infotur.jpg';
import { Facebook, WhatsApp, Telegram } from '@mui/icons-material';

function ContactsDetailsComponent() {
    const infoturData = useLocation().state;
    const classes = useStyles();
    const handleRedirect = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div className={classes.container}>
            <div className={classes.title}>Infotur Información</div>
            <div className={classes.logo}>
                <img src={infoturLogo} alt="Logo de Infotur" width="100%" height="100%" />
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
            <div className={classes.iconContainer} >
                <Facebook onClick={() => handleRedirect('https://www.facebook.com/infoturpotosi/')} className={classes.icon} sx={{ fontSize: '4rem' }} />
                <WhatsApp onClick={() => handleRedirect('https://wa.me/+5916231021/')} className={classes.icon} sx={{ fontSize: '4rem' }} />
                <Telegram onClick={() => handleRedirect('https://t.me/+5916231021/')} className={classes.icon} sx={{ fontSize: '4rem' }} />
            </div>
        </div>
    )
}

export default ContactsDetailsComponent