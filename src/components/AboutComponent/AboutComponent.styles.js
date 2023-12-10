import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '4rem 0 4rem 0rem',
        '& h4': {
            fontSize: '1.5rem',
            margin: '0 0 2rem 0',
            color: '#FFDAB9',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textAlign: 'center',
            padding: '0 1.5rem 0 1.5rem',
            textTransform: 'uppercase'
        },
        [mq('md')]: {
            margin: '8rem 0 8rem 2rem',
            maxWidth: '90rem',
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
    textWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& h6': {
            color: '#FFDAB9',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '1rem',
            marginTop: '2rem',
            padding: '0 3rem 0 3rem'
        },
        [mq('md')]: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            '& h6': {
                fontSize: '1.5rem',
                marginTop: '0rem',
                padding: '0 3rem 0 3rem',
            },
        }
    },
    img: {
        width: '350px',
        height: '350px',
        marginTop: '0rem',
        [mq('md')]: {
            marginTop: '1rem',

        }
    },
    titleSecctions: {
        color: '#FFDAB9',
        textAlign: 'center',
        fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        marginTop: '1rem',
        fontSize: '1.4rem',
        fontWeight: 'bold',
    },
}))