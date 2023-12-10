import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
    },
    box: {
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem 0.5rem 1rem',
        color: '#FFDAB9',
        '& h2': {
            color: 'black',
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase',
            transform: 'skew(-10deg)',
            textAlign: 'center',
            background: 'linear-gradient(to right, #FFD966, #FF4500)',

        },
        '& h3': {
            marginTop: '1rem',
            fontSize: '1.5rem',
            textAlign: 'center',
            fontWeight: 'bold',
            textTransform: 'capitalize',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        },
        '& h4': {
            textAlign: 'center',
            textTransform: 'capitalice',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        },
        '& h6': {
            marginTop: '1rem',
            textTransform: 'capitalize',
        },
        '& p': {
            marginTop: 5,
            textAlign: 'center'
        },
        [mq('md')]: {
            padding: '0 4rem 0 4rem',
            alignItems: 'center',
            '& h2': {
                marginTop: '2rem',
                fontSize: '2rem',
                padding: '1rem 0 1rem 0',
                color: '#FFDAB9',
                textAlign: 'center',
                fontWeight: 'bold',
                letterSpacing: '.4rem',
                color: 'black',
                fontWeight: 'bold',
                padding: theme.spacing(1),

            },
            '& h3': {
                marginTop: '2rem',
                fontSize: '3rem',
            },
            '& h6': {
                fontSize: '1.5rem',
                textTransform: 'capitalize',

            },
        },
    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    socialNet: {
        marginTop: '1rem',
        padding: '0 0rem 0 0rem',
        [mq('md')]: {
            marginTop: '1rem',
            padding: '0 18rem 0 18rem'
        },
    },
    openingHours: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        '& h3': {
            fontSize: '.8rem',
            marginTop: '1rem',
            fontWeight: 'bold',
        },
        [mq('md')]: {
            gap: 40,
            '& h3': {
                fontSize: '1.7rem',
            },
        },
    },
    containerProducts: {
        marginTop: '2rem',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItmes: 'center',
        justifyContent: 'space-around',
        [mq('md')]: {
            flexDirection: 'row',
        },
    }

}))