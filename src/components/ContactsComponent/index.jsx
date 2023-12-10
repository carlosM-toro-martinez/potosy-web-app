import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { useStyles } from './ContactsComponent.styles';
import CardsContactComponent from './CardsContactComponent';
import infoturData from '../../JSON/infotours.json'

function ContactsComponent() {
    const classes = useStyles();
    return (
        <Box className={classes.Container}>
            <Typography variant="h4" >
                Contactos
            </Typography>
            <div className={classes.contanerDesktop}>
                <ImageList cols={1} gap={50}  >
                    <>
                        <ImageListItem>
                            <CardsContactComponent infoturData={infoturData.infotur} />
                        </ImageListItem>
                    </>
                </ImageList>
            </div>
            <div className={classes.contanerMovile}>
                <ImageList cols={1} gap={25}  >
                    <>
                        <ImageListItem>
                            <CardsContactComponent infoturData={infoturData.infotur} />
                        </ImageListItem>
                    </>
                </ImageList>
            </div>
        </Box>
    )
}

export default ContactsComponent