import React from 'react';
import { useStyles } from "./ContactsDetails.styles";
import { useLocation } from 'react-router-dom';
import infoturLogo from '../../../assets/images/infotour.jpg'

function ContactsDetailsComponent() {
    const infoturData = useLocation().state;
    const classes = useStyles();
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
                <span className={classes.label}>Redes sociales:</span>
                <span>{infoturData.redes_sociales.facebook}</span>
            </div>
            <div>
                <span className={classes.label}>Logotipo:</span>
                <span>{infoturData.logotipo}</span>
            </div>
            <div>
                <span className={classes.label}>Dirección:</span>
                <span>{infoturData.direccion}</span>
            </div>
            <div className={classes.description}>
                <span className={classes.label}>Descripción Infotur:</span>
                <p>{infoturData.descripcion}</p>
            </div>
        </div>
    )
}

export default ContactsDetailsComponent