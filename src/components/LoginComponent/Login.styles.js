import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60rem',
        position: 'relative',
        marginTop: theme.spacing(20),
        '& h4': {
            width: '30rem',
            fontSize: '2rem',
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
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginBottom: '5rem'
    },

}))