import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        zIndex: 1,
        margin: '0.5rem 2rem 0 2rem',
        width: '100%',
        position: 'absolute',
    },
    textButton: {
        fontWeight: 'bold',
        background: 'none',
        font: 'inherit',
        padding: '0',
        border: 'none',
        textTransform: 'uppercase',
        '&:hover': {
            color: "green",
        },
    },
    imageLogo: {
        width: '6rem',
        height: '6rem',
        borderRadius: '100%',
        marginLeft: '1rem',
        // [mq('xxs')]: {
        //     maxHeight: '25rem',
        // },
        // [mq('md')]: {
        //     maxHeight: '20rem',
        // },
    },
}))