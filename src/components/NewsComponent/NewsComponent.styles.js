import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    Container: {
        margin: '7rem 0 8rem 2rem',
        color: '#FFDAB9',
        '& h2': {
            color: '#FFDAB9',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '1.8rem',
            marginBottom: '2rem'
        },
        [mq('md')]: {
            '& h2': {
                fontSize: '2rem',
                marginBottom: '2rem',
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
            }
        }
    },
    containerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    containerMovile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [mq('md')]: {
            display: 'none',

        }
    }
}))