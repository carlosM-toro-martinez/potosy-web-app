import React from 'react';
import { useStyles } from './backgroundComponent';
import { Box } from '@mui/material';
import background from '../../assets/images/background.jpg'


function BackgroundComponent({ children }) {
    const classes = useStyles();
    return (
        <Box className={classes.container} sx={{ backgroundImage: `url(${background})` }}>
            <div className={classes.box}>
                {children}
            </div>
        </Box>
    )
}

export default BackgroundComponent