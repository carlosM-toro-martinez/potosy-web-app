import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'relative'
    },
    icons: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'white',
        cursor: 'pointer',
        fontSize: '4rem',
    },
    nextIcons: {
        right: theme.spacing(2),
        [mq('md')]: {
            right: theme.spacing(-7),
        },
    },
    prevIcons: {
        left: theme.spacing(2),
        [mq('md')]: {
            left: theme.spacing(-7),
        },
    },
    imgContainer: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    imageContainer: {
        height: '22rem',
        width: '22rem',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'contain',
        padding: '.2rem 0rem .2rem 0rem',
        [mq('md')]: {
            height: '31rem',
            width: '40rem',
            padding: '1rem 0.2rem 1rem 0.2rem',


        },
    },
    img: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '22rem',
        width: '22rem',
        [mq('md')]: {
            //height: '31rem',
            //width: '50rem'
            width: '100%',
            height: '100%',

        },
    },
    loadingText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '2rem',
    },
    // icons: {

    // }
}))