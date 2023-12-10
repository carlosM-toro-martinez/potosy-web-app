import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '7rem 0 8rem 2rem',
        maxWidth: '90rem',
        color: '#FFDAB9',
        '& h4': {
            marginBottom: '1rem',
            color: '#FFDAB9',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase'
        },
        [mq('md')]: {
            '& h4': {
                fontSize: '4rem',
                padding: '1rem 0 1rem 0',
                color: '#FFDAB9',
                textAlign: 'center',
                fontWeight: 'bold',
                letterSpacing: '.3rem',
                fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
                textTransform: 'uppercase',
                transform: 'skew(-10deg)',
                textAlign: 'center',
                background: 'linear-gradient(to right, #FFD966, #FF4500)',
                padding: theme.spacing(1),
                color: 'black',
                fontWeight: 'bold',
            },
        }
    },
    contanerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
        }
    },
    contanerMovile: {
        display: 'flex',
        [mq('md')]: {
            display: 'none',

        }
    }
}))