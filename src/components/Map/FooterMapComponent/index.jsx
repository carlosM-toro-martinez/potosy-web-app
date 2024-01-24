import { Link } from '@mui/material'
import React from 'react'

function FooterMapComponent({ calle, coordinates }) {
    const playStoreLink = 'https://play.google.com/store/apps/details?id=com.potosy';
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '20%',
            backgroundColor: '#C0C0C0'
        }}>
            <div>Direccion:</div>
            <div>{calle}</div>
            <div>
                Para una mejor experiencia descargue nuestra app de la playstore
                <Link href={playStoreLink} target="_blank" rel="noopener noreferrer" >
                    Potosy mas que historia
                </Link>
            </div>
        </div>

    )
}

export default FooterMapComponent