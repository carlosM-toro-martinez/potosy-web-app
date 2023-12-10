import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    containerStyle: {
        backgroundSize: 'cover',
        width: '100%',
        height: '50vh',
        [mq('md')]: {
            height: '95vh',
        },
    },
    shadow: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 50,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        '& h4': {
            fontSize: '1rem',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '.1rem',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase',
            padding: '0 1rem 0 1rem'
        },
        [mq('md')]: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            '& h4': {
                fontSize: '2.5rem',
                letterSpacing: '.2rem',
            },
        },
    },
}))