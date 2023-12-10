import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        '& h3': {
            marginTop: '-6rem',
            fontSize: '1.5rem',
            padding: '5rem 0 1rem 0',
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '.1rem',
            width: '50%',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase'
        },
        [mq('md')]: {
            '& h3': {
                marginTop: '1rem',
                fontSize: '4rem',
                letterSpacing: '.2rem',
                // fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
                // textTransform: 'uppercase',
                // transform: 'skew(-10deg)',
                // textAlign: 'center',
                // background: 'linear-gradient(to right, #FFD966, #FF4500)',
                padding: '0 0 0 0',
                fontWeight: 'bold',
            },
        },
    },
    wrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    containerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    containerMovil: {
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        [mq('md')]: {
            display: 'none',
        },
    },
    itemContainer: {
        display: 'inline-block'
    },
    item: {
        display: 'flex',
        width: '10rem',
        height: '10rem',
        margin: '.5rem',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            border: '8px solid #556B2F',
        },
        [mq('md')]: {
            width: '21rem',
            height: '21rem',
            margin: '1rem',
            '&:hover': {
                border: '8px solid #556B2F',
            },
        },
    },
    image: {
        width: '9rem',
        height: '9rem',
        color: 'black',
        objectFit: 'cover',
        display: 'inline-block',
        [mq('md')]: {
            width: '20rem',
            height: '20rem',
            color: 'black',
            objectFit: 'cover',
        },
    },
    titleSecctions: {
        color: '#FFDAB9',
        textAlign: 'center',
        fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        marginTop: '0.35rem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        [mq('md')]: {
            marginTop: '1rem',
            fontSize: '1.4rem',
        },
    },
}))