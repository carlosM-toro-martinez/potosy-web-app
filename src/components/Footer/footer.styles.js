import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '42rem',
        width: '100%',
        position: 'relative',

    },
    wrapper: {
        height: '42rem',
        width: '100%',
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'

        //borderTop: '1rem solid #505050',
    },
    mapContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        '& h2': {
            fontSize: '2rem',
            margin: '2rem 0 2rem 0',
            padding: '1rem 0 1rem 0',
            color: '#FFDAB9',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '.4rem',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase',
            transform: 'skew(-10deg)',
            textAlign: 'center',
            background: 'linear-gradient(to right, #FFD966, #FF4500)',
            padding: theme.spacing(1),
            color: 'black',
            fontWeight: 'bold',
        },
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    footer: {
        display: 'flex',
        backgroundColor: '#FF4500',
        width: '100%',
        height: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
    },

}))