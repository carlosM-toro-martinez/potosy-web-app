import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    mapContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '& h2': {
            fontSize: '2rem',
            padding: '1rem 0 1rem 0',
            color: '#FFDAB9',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '.2rem',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase',
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