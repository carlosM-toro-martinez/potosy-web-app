import React from 'react'

function FooterMapComponent({ calle, coordinates }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '25%',
            backgroundColor: '#C0C0C0'
        }}>
            <div>Direccion:</div>
            <div>{calle}</div>
            {/* <div>
                <Link >
                    Para una mejor experiencia en telefonos mobiles descargue nuestr app de la playstore
                </Link>
            </div> */}
        </div>

    )
}

export default FooterMapComponent